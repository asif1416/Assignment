// Create a message
exports.create = (req, res) => {
    res.send("Create Message API: Message created successfully");
};

// Read a message
exports.read = (req, res) => {
    res.send("Read Message API: Message data goes here");
};

// Delete a message
exports.delete = (req, res) => {
    res.send("Delete Message API: Message deleted successfully");
};

// Update a message
exports.update = (req, res) => {
    res.send("Update Message API: Message updated successfully");
};
