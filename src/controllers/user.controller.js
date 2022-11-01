import User from "../models/user.model.js";

export async function createUser(body) {
  const { name, age, email, password } = body;

  const user = await User.create({
    name,
    age,
    email,
    password,
  });

  return user;
}
 
export async function getUser(id) {
    
    const user = await User.findById(id);
    
    return user; 
}

export async function updateUser(id, body) {
    
    const user = await User.findByIdAndUpdate(id, {
        ...body
    });
    
    return user;
}

export async function deleteUser(id) {
    const user = await User.findByIdAndDelete(id);
    return user;
}

export async function getUsers(query) {
    const users = await User.find();
    
    return users;
}

