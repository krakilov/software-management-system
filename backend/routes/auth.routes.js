const { body, validationResult } = require('express-validator');
const router = require('express').Router();

const User = require('../models/User');

// /api/auth/signup
router.post(
    '/signup',
    body('email').isEmail(),
    body('password').isLength({ min: 8 }),
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({ message: 'Некорретные данные.' });
            }

            const { email, name, password, confirmation } = req.body;

            const emailCandidate = await User.findOne({ email });
            const nameCandidate = await User.findOne({ name });

            if (emailCandidate || nameCandidate) {
                return res.status(400).json({ message: "Данный пользователь уже существует." });
            }

            if (password !== confirmation) {
                return res.status(400).json({ message: "Пароли не совпадают." });
            }

            const user = new User({ email, name, password });

            await user.save();

            res.status(200).json({ message: "Пользователь создан." });
        } catch(error) {
            console.log(error.message);
            res.status(500).json({ message: "Ошибка сервера." });
        }
    }
);

// /api/auth/login
router.post(
    '/login',
    async (req, res) => {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({ message: "Введены некорректные данные." });
            }

            if (password !== user.password) {
                return res.status(400).json({ message: "Введены некорректные данные." });
            }
            
            res.status(200).json({ userId: user.id });
        } catch(error) {
            res.status(500).json({ message: "Ошибка сервера." });
        }
    }
);

module.exports = router;