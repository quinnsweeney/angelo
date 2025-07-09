import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

interface Product {
  title: string;
  description: string;
  imageUrl: string;
}

const products: Product[] = [
  {
    title: "Hair Powder",
    description:
      "Discover a featherlight hair powder for men that styles and texturizes without the weight. Our talc-free formula adds flexible hold, bold texture, and clean volume to second-day styles, letting you reshape and refresh effortlessly.",
    imageUrl: "/images/hair-powder.jpg",
  },
  {
    title: "Molding Paste",
    description:
      "Perfect for all hair types and styles, our molding paste effortlessly shapes wavy, straight, or curly hair, whether dry, thin, or thick, into structured or unstructured looks. It leaves your hair soft with a semi-glossy, authentic finish, helping you achieve an effortless look.",
    imageUrl: "/images/paste.jpg",
  },
  {
    title: "Clay",
    description:
      "Clay blends clay, wax, and elastic fibers for added thickness and a natural, shine-free finish. Ideal for thin or fine hair, this paraben-free clay offers non-sticky, touchable, and moldable styles with medium hold. Perfect for short to medium hair, it delivers a textured, matte look without stiffness or weight.",
    imageUrl: "/images/clay.jpg",
  },
  {
    title: "Pomade",
    description:
      "Perfect for all hair types and styles, our pomade effortlessly shapes wavy, straight, or curly hair, whether dry, thin, or thick, into structured or unstructured looks. It leaves your hair soft with a semi-glossy, authentic finish, helping you achieve an effortless look.",
    imageUrl: "/images/pomade.jpg",
  },
  {
    title: "Wax",
    description:
      "This versatile paraben-free wax combines wax and clay in a beeswax consistency, delivering a strong, pliable grip for precise styling. Ideal for messy or sleek hairstyles, as well as shaping mustaches, beards, or goatees, it offers frizz-free definition with a low sheen. With a high-hold, low-shine formula, it lasts all day and remains flexible for reshaping the next day.",
    imageUrl: "/images/wax.jpg",
  },
];

const HairStylingPage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Hair Styling Products
        </Typography>

        {/* Brand Introduction */}
        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            1821 Man Made
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            I exclusively use 1821 Man Made hair products because they embody
            the essence of a timeless gentleman. Their aesthetic is nothing
            short of iconic, combining sophistication, quality, and uniqueness
            to deliver results that rival professional standards. The brand's
            name pays homage to the 18th and 21st amendments—the former marking
            the start of Prohibition in the early 1900s and the latter
            symbolizing the era's famed bootlegging culture. This rebellious,
            inventive spirit is infused into every aspect of the brand. Back
            then, materials had a weight and durability that reflected their
            quality, and 1821 draws on that tradition by incorporating those
            old-school values into modern formulations. By pairing premium
            craftsmanship with cutting-edge ingredients, they achieve top-tier
            performance while being mindful of health and well-being.
          </Typography>
        </Paper>

        {/* Products Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
          }}
        >
          {products.map((product) => (
            <Card elevation={3} key={product.title}>
              <CardMedia
                component="img"
                height="400"
                image={product.imageUrl}
                alt={product.title}
                sx={{
                  objectFit: "cover",
                  backgroundColor: "grey.200", // placeholder background
                }}
              />
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  {product.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default HairStylingPage;
