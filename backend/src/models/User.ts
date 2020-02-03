import { prop, getModelForClass, Ref, arrayProp } from "@typegoose/typegoose";
export class User {
  @prop({
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    sparse: true,
    minlength: 3
  })
  username!: string;

  @prop({ required: true })
  password!: string;

  @prop({
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    sparse: true
  })
  email!: string;

  @prop({
    required: true
  })
  name!: string;

  @prop({
    required: true,
    minlength: 1,
    default: 13
  })
  age!: number;

  @arrayProp({
    itemsref: "User"
  })
  machas?: Ref<User>[];
}

export const UserModel = getModelForClass(User);
