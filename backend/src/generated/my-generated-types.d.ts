/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  LikableTypeEnum: "Comment" | "ImagePost" | "TextPost" | "VideoPost"
  PostTypeEnum: "ImagePost" | "TextPost" | "VideoPost"
}

export interface NexusGenRootTypes {
  Comment: { // root type
    author: string; // ID!
    id: string; // ID!
    post: string; // ID!
    postType: NexusGenEnums['PostTypeEnum']; // PostTypeEnum!
    text: string; // String!
  }
  Feed: { // root type
    posts: string[]; // [String!]!
  }
  ImagePost: { // root type
    author: string; // ID!
    caption?: string | null; // String
    id: string; // ID!
    image: string; // String!
    location?: string | null; // String
    uri: string; // String!
  }
  Like: { // root type
    author: string; // ID!
    id: string; // ID!
    likable: string; // ID!
    likableType: NexusGenEnums['LikableTypeEnum']; // LikableTypeEnum!
  }
  Mutation: {};
  Query: {};
  TextPost: { // root type
    author: string; // ID!
    content: string; // String!
    id: string; // ID!
    uri: string; // String!
  }
  User: { // root type
    age?: string | null; // String
    authToken: string; // ID!
    email: string; // String!
    id: string; // ID!
    name: string; // String!
    username: string; // String!
  }
  VideoPost: { // root type
    author: string; // ID!
    caption?: string | null; // String
    id: string; // ID!
    location?: string | null; // String
    uri: string; // String!
    video: string; // String!
  }
  Node: NexusGenRootTypes['User'] | NexusGenRootTypes['Comment'] | NexusGenRootTypes['ImagePost'] | NexusGenRootTypes['TextPost'] | NexusGenRootTypes['VideoPost'] | NexusGenRootTypes['Like'];
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  LikableType: NexusGenRootTypes['Comment'] | NexusGenRootTypes['ImagePost'] | NexusGenRootTypes['TextPost'] | NexusGenRootTypes['VideoPost'];
  PostType: NexusGenRootTypes['ImagePost'] | NexusGenRootTypes['TextPost'] | NexusGenRootTypes['VideoPost'];
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  LikableTypeEnum: NexusGenEnums['LikableTypeEnum'];
  PostTypeEnum: NexusGenEnums['PostTypeEnum'];
}

export interface NexusGenFieldTypes {
  Comment: { // field return type
    author: string; // ID!
    authorDetails: NexusGenRootTypes['User']; // User!
    id: string; // ID!
    post: string; // ID!
    postType: NexusGenEnums['PostTypeEnum']; // PostTypeEnum!
    text: string; // String!
  }
  Feed: { // field return type
    posts: string[]; // [String!]!
  }
  ImagePost: { // field return type
    author: string; // ID!
    authorDetails: NexusGenRootTypes['User']; // User!
    caption: string | null; // String
    id: string; // ID!
    image: string; // String!
    location: string | null; // String
    uri: string; // String!
  }
  Like: { // field return type
    author: string; // ID!
    authorDetails: NexusGenRootTypes['User']; // User!
    id: string; // ID!
    likable: string; // ID!
    likableType: NexusGenEnums['LikableTypeEnum']; // LikableTypeEnum!
  }
  Mutation: { // field return type
    createComment: NexusGenRootTypes['Comment']; // Comment!
    createImagePost: NexusGenRootTypes['ImagePost']; // ImagePost!
    createTextPost: NexusGenRootTypes['TextPost']; // TextPost!
    createVideoPost: NexusGenRootTypes['VideoPost']; // VideoPost!
    deleteImagePost: NexusGenRootTypes['ImagePost']; // ImagePost!
    deleteTextPost: NexusGenRootTypes['TextPost']; // TextPost!
    deleteVideoPost: NexusGenRootTypes['VideoPost']; // VideoPost!
    likeComment: NexusGenRootTypes['Like']; // Like!
    likePost: NexusGenRootTypes['Like']; // Like!
    login: string; // String!
    signup: string; // String!
    unlikeComment: NexusGenRootTypes['Like']; // Like!
    unlikePost: NexusGenRootTypes['Like']; // Like!
    updateComment: NexusGenRootTypes['Comment']; // Comment!
    updateImagePost: NexusGenRootTypes['ImagePost']; // ImagePost!
    updateTextPost: NexusGenRootTypes['TextPost']; // TextPost!
    updateVideoPost: NexusGenRootTypes['VideoPost']; // VideoPost!
  }
  Query: { // field return type
    getFeed: NexusGenRootTypes['Feed']; // Feed!
    me: NexusGenRootTypes['User']; // User!
  }
  TextPost: { // field return type
    author: string; // ID!
    authorDetails: NexusGenRootTypes['User']; // User!
    content: string; // String!
    id: string; // ID!
    uri: string; // String!
  }
  User: { // field return type
    age: string | null; // String
    authToken: string; // ID!
    email: string; // String!
    id: string; // ID!
    name: string; // String!
    username: string; // String!
  }
  VideoPost: { // field return type
    author: string; // ID!
    authorDetails: NexusGenRootTypes['User']; // User!
    caption: string | null; // String
    id: string; // ID!
    location: string | null; // String
    uri: string; // String!
    video: string; // String!
  }
  Node: { // field return type
    id: string; // ID!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createComment: { // args
      postId: string; // String!
      text: string; // String!
    }
    createImagePost: { // args
      caption?: string | null; // String
      image: string; // String!
      location?: string | null; // String
      uri: string; // String!
    }
    createTextPost: { // args
      content: string; // String!
      uri: string; // String!
    }
    createVideoPost: { // args
      caption?: string | null; // String
      location?: string | null; // String
      uri: string; // String!
      video: string; // String!
    }
    deleteImagePost: { // args
      uri: string; // String!
    }
    deleteTextPost: { // args
      uri: string; // String!
    }
    deleteVideoPost: { // args
      uri: string; // String!
    }
    likeComment: { // args
      commentId: string; // String!
    }
    likePost: { // args
      postId: string; // String!
    }
    login: { // args
      password: string; // String!
      username: string; // String!
    }
    signup: { // args
      age?: number | null; // Int
      email?: string | null; // String
      name: string; // String!
      password: string; // String!
      username: string; // String!
    }
    unlikeComment: { // args
      likeCommentId: string; // String!
    }
    unlikePost: { // args
      likePostId: string; // String!
    }
    updateComment: { // args
      commentId: string; // String!
      text: string; // String!
    }
    updateImagePost: { // args
      caption?: string | null; // String
      location?: string | null; // String
      uri: string; // String!
    }
    updateTextPost: { // args
      content: string; // String!
      uri: string; // String!
    }
    updateVideoPost: { // args
      caption?: string | null; // String
      location?: string | null; // String
      uri: string; // String!
    }
  }
  Query: {
    getFeed: { // args
      limit?: number | null; // Int
      skip?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
  LikableType: "Comment" | "ImagePost" | "TextPost" | "VideoPost"
  PostType: "ImagePost" | "TextPost" | "VideoPost"
  Node: "User" | "Comment" | "ImagePost" | "TextPost" | "VideoPost" | "Like"
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Comment" | "Feed" | "ImagePost" | "Like" | "Mutation" | "Query" | "TextPost" | "User" | "VideoPost";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = "LikableTypeEnum" | "PostTypeEnum";

export type NexusGenInterfaceNames = "Node";

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = "LikableType" | "PostType";

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}