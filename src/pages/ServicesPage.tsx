import React from "react";
import {
  Container,
  Typography,
  Box,
  Stack,
  Card,
  CardContent,
  Divider,
} from "@mui/material";

interface Service {
  title: string;
  price: number;
  description: string;
}

const services: Service[] = [
  {
    title: "Men's Haircut",
    price: 45,
    description:
      "Customized haircut using clippers, shears, or both, crafted to enhance your style. Whether you prefer a classic fade, tapered edges, or a textured scissor cut, I ensure a polished, well-blended finish complements your look. The service is completed with a refreshing hot towel treatment and a precision straight razor neck shave for the ultimate clean finish.",
  },
  {
    title: "Single Guard Haircut with Tapered Neckline",
    price: 33,
    description:
      "A clean, one-length clipper cut using a guard for consistent length, complemented by a smoothly tapered back for a refined look. The service is completed with a precision neck shave and a soothing hot towel treatment, leaving you feeling fresh and polished.",
  },
  {
    title: "Traditional Straight Razor Shave",
    price: 45,
    description:
      "Enjoy a classic, close shave with a sharp straight razor, enhanced by multiple hot towels for comfort and precision. A warm lather preps the skin, followed by expert razor work for a smooth finish. A cool towel and soothing post-shave balm complete the experience, leaving your skin refreshed and rejuvenated.",
  },
  {
    title: "Traditional Straight Razor Head Shave",
    price: 45,
    description:
      "Enjoy a smooth, close shave with a straight razor, enhanced by a hot towel treatment for comfort. Finished with a soothing balm, leaving your scalp fresh, polished, and revitalized.",
  },
  {
    title: "Classic Beard Shaping",
    price: 25,
    description:
      "Designed for the well-maintained longer beard, this precision shaping service uses clippers and shears to refine density, balance contours, and craft a polished, distinguished look. Expert detailing ensures clean lines and seamless transitions, keeping your beard structured yet natural for effortless sophistication.",
  },
  {
    title: "Luxe Beard Shaping with Straight Razor Outline",
    price: 45,
    description:
      "A precise, clean shave using a straight razor to define sharp lines and contours, ensuring a polished, well-groomed look. Finished with a soothing hot towel and post-shave balm for ultimate comfort and refinement.",
  },
  {
    title: "Classic Haircut + Beard Combo",
    price: 60,
    description:
      "Stay sharp and well-groomed with our precision haircut and expert beard shaping. Featuring a luxurious hot lather outline and a clean shave of the neck and cheek area, this service ensures a polished, refined look every time.",
  },
  {
    title: "Haircut + Luxe Beard Combo",
    price: 80,
    description:
      "Keep that hair and beard looking sharp with our Classic Haircut and LuxBeard Trim (with hot, lather outline and shave of the neck and cheek area).",
  },
  {
    title: "Haircut + Traditional Shave Combo",
    price: 80,
    description:
      "Experience the timeless art of grooming with a precision haircut tailored to your style, paired with a traditional straight razor shave. Enjoy the rich lather, expert blade work, and a refreshing finish, leaving you with an ultra-smooth, refined look.",
  },
  {
    title: "Long Men's Haircut",
    price: 65,
    description:
      "Maintain your length while refining your look with expert shaping and styling. Whether you're going for a sleek, layered finish or a rugged, textured vibe, our precision techniques ensure your hair stays sharp and manageable.",
  },
];

const ServicesPage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Services
        </Typography>
        <Stack spacing={3}>
          {services.map((service, index) => (
            <React.Fragment key={service.title}>
              <Card elevation={3}>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="h2"
                      sx={{ fontWeight: "bold" }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="primary"
                      sx={{ fontWeight: "bold" }}
                    >
                      ${service.price}
                    </Typography>
                  </Box>
                  <Typography variant="body1" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
              {index < services.length - 1 && <Divider sx={{ my: 1 }} />}
            </React.Fragment>
          ))}
        </Stack>
      </Box>
    </Container>
  );
};

export default ServicesPage;
