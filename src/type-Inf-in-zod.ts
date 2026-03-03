import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
// giving cleaner error msg in zod
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

export type UserProfileUpdate = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.use(express.json());

app.put("/user", (req, res) => {
  const result = userProfileSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      errors: result.error.flatten()
    });
  }

  const updateBody = result.data; 

  
  res.json({
    message: "User updated",
    data: updateBody
  });
});

app.listen(3000);