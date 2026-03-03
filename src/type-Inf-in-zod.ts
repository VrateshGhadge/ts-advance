import express, { Request, Response, NextFunction } from "express";
import { z } from "zod";

const app = express();

// Middleware to parse JSON
app.use(express.json());


const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z
    .number()
    .min(18, { message: "You must be at least 18 years old" })
    .optional(),
});

export type UserProfileUpdate = z.infer<typeof userProfileSchema>;


type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: any;
};

const successResponse = <T>(data: T): ApiResponse<T> => ({
  success: true,
  data,
});

const errorResponse = (error: any): ApiResponse<null> => ({
  success: false,
  error,
});


app.put(
  "/user",
  (req: Request<{}, {}, UserProfileUpdate>, res: Response) => {
    const result = userProfileSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json(
        errorResponse(result.error.flatten())
      );
    }

    const updateBody = result.data; 

    console.log("Updating user with:", updateBody);

    return res.json(
      successResponse({
        message: "User updated successfully",
        updatedUser: updateBody,
      })
    );
  }
);


app.use(
  (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
);


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});