const registerUser = async (req, res) => {
  try {
    const { name, email, password, adminKey } = req.body;

    console.log("Request Body:", req.body);
    console.log("Received adminKey:", adminKey);
    console.log("Expected ADMIN_KEY:", process.env.ADMIN_KEY);

    if (!process.env.ADMIN_KEY) {
      return res.status(500).json({
        message: "ADMIN_KEY not found in Railway variables",
      });
    }

    if (adminKey !== process.env.ADMIN_KEY) {
      return res.status(401).json({
        message: `Invalid Admin Key. Received: ${adminKey}`,
      });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};