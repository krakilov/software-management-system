const router = require('express').Router();

const Project = require('../models/Project');

// /api/project/create
router.post('/create', async (req, res) => {
    const { title, description, members, isPrivate } = req.body;

    
	
    res.status(200).json({ message: 'Проект создан.' });
});

module.exports = router;