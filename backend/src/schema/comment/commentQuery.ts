import { queryField, stringArg } from "nexus";
import { UserContext } from "../types";
import { AuthenticationError, UserInputError } from "apollo-server";
import { CommentModel } from "../../models/Comment";

export const getComment = queryField("getComment", {
  type: "Comment",
  args: {
    commentId: stringArg()
  },
  async resolve(_, { commentId }, ctx: UserContext): Promise<any> {
    try {
      if (!ctx.user) {
        throw new AuthenticationError(
          "Cannot check the comments without logging in"
        );
      }

      const comment = await CommentModel.findById(commentId);

      if (!comment) {
        throw new UserInputError("Given comment id doesn't exist");
      }

      return comment;
    } catch (err) {
      return err;
    }
  }
});

export const getCommentCount = queryField("getCommentCount", {
  type: "Int",
  args: {
    postId: stringArg()
  },
  async resolve(_, { postId }, ctx: UserContext): Promise<any> {
    try {
      if (!ctx.user) {
        throw new AuthenticationError(
          "Cannot get the comment count without logging in"
        );
      }

      let comments = await CommentModel.find({ post: postId });

      return comments.length;
    } catch (err) {
      return err;
    }
  }
});
