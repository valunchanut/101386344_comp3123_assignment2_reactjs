const User = require('../models/user');

// Controller for user signup
exports.signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if username or email already exists
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(409).json({ status: false, message: "Username or email already exists." });
        }

        const newUser = new User({ username, email, password });
        await newUser.save();

        res.status(201).json({ status: true, message: "User created successfully." });
    } catch (err) {
        res.status(500).json({ status: false, message: err.message });
    }
};

// Controller for user login
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find user by username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ status: false, message: "User not found." });
        }

        // Compare passwords
        user.comparePassword(password, (err, isMatch) => {
            if (err) {
                return res.status(500).json({ status: false, message: err.message });
            }
            if (isMatch) {
                res.status(200).json({
                    status: true,
                    username: user.username,
                    message: "User logged in successfully"
                });
            } else {
                res.status(401).json({ status: false, message: "Invalid username or password" });
            }
        });
    } catch (err) {
        res.status(500).json({ status: false, message: err.message });
    }
};
