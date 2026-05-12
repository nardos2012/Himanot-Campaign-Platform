import Post from "../models/post.model.js";

// CREATE POST
export const createPost = async (
  req,
  res
) => {

  try {

    console.log("BODY:");
    console.log(req.body);

    console.log("FILE:");
    console.log(req.file);

    // VALIDATION
    if (
      !req.body.title ||
      !req.body.content
    ) {

      return res.status(400).json({

        success: false,

        message:
          "Title and content are required",

      });
    }

    // CREATE POST
    const post =
      await Post.create({

        title:
          req.body.title,

        content:
          req.body.content,

        image:
          req.file?.path || "",

        author:
          req.user?.id || null,

      });

    res.status(201).json({

      success: true,

      message:
        "Post created successfully",

      post,

    });

  } catch (error) {

    console.error(
      "CREATE POST ERROR:"
    );

    console.error(error);

    res.status(500).json({

      success: false,

      message:
        error.message,

    });

  }
};

// GET ALL POSTS
export const getPosts = async (
  req,
  res
) => {

  try {

    const posts =
      await Post.find()
        .sort({
          createdAt: -1,
        });

    res.status(200).json({

      success: true,

      posts,

    });

  } catch (error) {

    console.error(
      "GET POSTS ERROR:"
    );

    console.error(error);

    res.status(500).json({

      success: false,

      message:
        error.message,

    });

  }
};

// GET SINGLE POST
export const getPostById =
  async (req, res) => {

    try {

      const post =
        await Post.findById(
          req.params.id
        );

      if (!post) {

        return res
          .status(404)
          .json({

            success: false,

            message:
              "Post not found",

          });
      }

      res.status(200).json({

        success: true,

        post,

      });

    } catch (error) {

      console.error(
        "GET POST ERROR:"
      );

      console.error(error);

      res.status(500).json({

        success: false,

        message:
          error.message,

      });

    }
  };

// DELETE POST
export const deletePost =
  async (req, res) => {

    try {

      const post =
        await Post.findById(
          req.params.id
        );

      if (!post) {

        return res
          .status(404)
          .json({

            success: false,

            message:
              "Post not found",

          });
      }

      await Post.findByIdAndDelete(
        req.params.id
      );

      res.status(200).json({

        success: true,

        message:
          "Post deleted successfully",

      });

    } catch (error) {

      console.error(
        "DELETE POST ERROR:"
      );

      console.error(error);

      res.status(500).json({

        success: false,

        message:
          error.message,

      });

    }
  };