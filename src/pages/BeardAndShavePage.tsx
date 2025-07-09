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
    title: "Pre-Shave Cream: Refreshing (Green)",
    description:
      "The product that started it all in the 1940's - the first in the Proraso range. With its particularly rich, thick texture, Proraso Pre-Shave Cream preps the skin for a close shave, softening the beard and adding an extra layer of protection to the skin. Eucalyptus Oil and Menthol combine a purifying and toning action with a refreshing and revitalizing effect. For every kind of beard and skin type.",
    imageUrl: "/images/pre-shave-cream.jpg",
  },
  {
    title: "Shaving Cream Tube: Refreshing",
    description:
      'The original Proraso shaving classic, this refreshing and toning Shaving Soap is formulated for any beard on any man. This creamy soap produces a thick, elastic lather and is enriched with natural ingredients that make it particularly concentrated and rich. Made with a special "hot soap" process, it\'s left to mature in small batches for 3 days, producing an extremely thick and creamy soap that products a soft, rich lather. Eucalyptus Oil tones and purifies your facial hair and skin, Menthol helps refresh and revitalize, and Glycerin helps the blade glide smoothly and reduce razor burn and rashes.',
    imageUrl: "/images/shaving-cream-tube.jpg",
  },
  {
    title: "After Shave Lotion: Refreshing",
    description:
      "Same classic formula, refreshed packaging! Proraso After Shave Lotion, Refreshing and Toning formula, is a splash that cools and tones the skin after shaving, and completes the shaving ritual. Witch hazel reduces inflammation and promotes skin healing. Menthol revitalizes the skin with a cooling sensation as Eucalyptus Oil purifies.",
    imageUrl: "/images/after-shave-lotion.jpg",
  },
  {
    title: "After Shave Balm: Refreshing",
    description:
      "Proraso After Shave Balm, Refreshing and Toning, is an alcohol-free, non-greasy formula that provides immediate relief after shaving and completes the shaving ritual. Combining the hydrating properties of a balm with the calming and soothing benefits of a cream, the lightweight formula is enriched with Eucalyptus Oil to help purify the skin and reduce inflammation, and Menthol to revitalize, tone, cool and refresh.",
    imageUrl: "/images/after-shave-balm.jpg",
  },
];

const BeardAndShavePage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Shaving Products
        </Typography>

        {/* Brand Introduction */}
        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Proraso Shaving Products
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            We offer a wide selection of brands, from basic to top of the line.
            Our products include shampoos, brushes, hair dryers, conditioners,
            make-up, skincare and creams.
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

export default BeardAndShavePage;
