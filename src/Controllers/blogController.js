// Create a blog post
exports.create = (req, res) => {
    welcome.showMsg(res);
    res.send("Create Blog API: Blog post created successfully");
};

// Read a blog post
exports.read = (req, res) => {
    res.send("Read Blog API: Blog post data goes here");
};

// Delete a blog post
exports.delete = (req, res) => {
    res.send("Delete Blog API: Blog post deleted successfully");
};

// Update a blog post
exports.update = (req, res) => {
    res.send("Update Blog API: Blog post updated successfully");
};
