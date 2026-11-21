
'use client';

import { useState } from 'react';

import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Grid,
  Card,
  CardContent,
  Chip,
  Divider,
  Paper,
  IconButton,
} from '@mui/material';

import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import StarIcon from '@mui/icons-material/Star';

import SofaHeader from 'src/components/sofa-header';

// ----------------------------------------------------------------------

const colors = [
  { name: 'Cream', value: '#e6d8c7', filter: 'none' },
  { name: 'Grey', value: '#888b89', filter: 'grayscale(0.8)' },
  { name: 'Olive', value: '#78806a', filter: 'sepia(.3) saturate(.8)' },
  { name: 'Brown', value: '#80604b', filter: 'sepia(.55) saturate(1.2)' },
  { name: 'Charcoal', value: '#414141', filter: 'grayscale(1) brightness(.65)' },
];

const fabrics = ['Linen', 'Velvet', 'Bouclé'];

const sizes = [
  { name: '2 Seater', price: 899 },
  { name: '3 Seater', price: 1199 },
  { name: 'L Shape', price: 1699 },
];

const collections = [
  {
    name: 'Modern Collection',
    description: 'Clean lines. Modern living.',
    price: '$899',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=85',
  },
  {
    name: 'Luxury Collection',
    description: 'Comfort meets elegance.',
    price: '$1,299',
    image:
      'https://images.unsplash.com/photo-1550254478-ead40cc54513?w=900&q=85',
  },
  {
    name: 'Classic Collection',
    description: 'Timeless design.',
    price: '$1,099',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=85',
  },
];

// ----------------------------------------------------------------------

export default function HomeView() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedFabric, setSelectedFabric] = useState('Linen');
  const [selectedSize, setSelectedSize] = useState(sizes[1]);
  const [orderOpen, setOrderOpen] = useState(false);

  const scrollToCustomizer = () => {
    document.getElementById('customize')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const handleOrder = () => {
    const configuration = {
      color: selectedColor.name,
      fabric: selectedFabric,
      size: selectedSize.name,
      price: selectedSize.price,
    };

    localStorage.setItem(
      'sofa-configuration',
      JSON.stringify(configuration)
    );

    setOrderOpen(true);
  };

  return (
    <Box sx={{ bgcolor: '#faf8f5', color: '#252421' }}>

      <SofaHeader />

      {/* ================================================== */}
      {/* 1. HERO SECTION */}
      {/* ================================================== */}

      <Box
        id="home"
        sx={{
          position: 'relative',
          minHeight: { xs: 650, md: 680 },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background:
            'linear-gradient(90deg, rgba(247,244,239,.98) 0%, rgba(247,244,239,.90) 40%, rgba(247,244,239,.05) 100%), url(https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1800&q=90) center/cover',
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 570, py: 10 }}>
            <Chip
              label="Premium Sofa Collection"
              sx={{
                bgcolor: '#e8ded3',
                mb: 3,
                fontWeight: 600,
              }}
            />

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: 43, sm: 56, md: 72 },
                lineHeight: 1.05,
                fontWeight: 800,
                letterSpacing: '-3px',
                mb: 3,
              }}
            >
              Your Dream Sofa,
              <br />
              Your Style.
            </Typography>

            <Typography
              sx={{
                color: '#66615c',
                fontSize: { xs: 16, md: 18 },
                lineHeight: 1.8,
                maxWidth: 450,
                mb: 4,
              }}
            >
              Experience the perfect blend of comfort, design and quality.
              Customize your sofa and bring luxury to your home.
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
            >
              <Button
                variant="contained"
                onClick={scrollToCustomizer}
                // endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: '#252421',
                  px: 4,
                  py: 1.8,
                  borderRadius: 10,
                  textTransform: 'none',
                  fontWeight: 700,
                  '&:hover': { bgcolor: '#9b8065' },
                }}
              >
                Customize Now
              </Button>

              <Button
                variant="outlined"
                href="#collections"
                sx={{
                  borderColor: '#77716a',
                  color: '#252421',
                  px: 4,
                  borderRadius: 10,
                  textTransform: 'none',
                }}
              >
                Explore Collections
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* ================================================== */}
      {/* 2. BENEFITS SECTION */}
      {/* ================================================== */}

      <Container maxWidth="xl" sx={{ py: 7 }}>
        <Grid container spacing={3}>
          {[
            {
              icon: <VerifiedOutlinedIcon />,
              title: 'Premium Quality',
              description: 'Built with carefully selected materials.',
            },
            {
              icon: <ChairOutlinedIcon />,
              title: 'Ultimate Comfort',
              description: 'Designed for everyday relaxation.',
            },
            {
              icon: <PaletteOutlinedIcon />,
              title: 'Customizable Design',
              description: 'Choose your own colors and fabrics.',
            },
            {
              icon: <LocalShippingOutlinedIcon />,
              title: 'Fast Delivery',
              description: 'Delivered safely to your home.',
            },
          ].map((item) => (
            <Grid item xs={6} md={3} key={item.title}>
              <Stack
                alignItems="center"
                textAlign="center"
                spacing={1.5}
                sx={{ px: 2 }}
              >
                <Box sx={{ color: '#9b8065', fontSize: 38 }}>
                  {item.icon}
                </Box>

                <Typography fontWeight={800}>
                  {item.title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Divider />

      {/* ================================================== */}
      {/* 3. SOFA CUSTOMIZER */}
      {/* ================================================== */}

      <Box
        id="customize"
        sx={{
          bgcolor: '#f0ece6',
          py: { xs: 7, md: 12 },
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={5} alignItems="center">

            <Grid item xs={12} md={4}>
              <Chip
                label="Design It Yourself"
                sx={{ mb: 2, bgcolor: '#e2d8cd' }}
              />

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: 36, md: 48 },
                  letterSpacing: '-2px',
                  mb: 2,
                }}
              >
                Design Your Perfect Sofa
              </Typography>

              <Typography
                color="text.secondary"
                lineHeight={1.8}
                mb={3}
              >
                Choose your favorite colors, fabrics and sizes.
                See your selected design before placing an order.
              </Typography>

              <Stack spacing={2}>
                {[
                  'Choose your favorite color',
                  'Select your preferred fabric',
                  'Find the perfect sofa size',
                ].map((item) => (
                  <Stack direction="row" spacing={1} key={item}>
                    <CheckCircleOutlineIcon sx={{ color: '#9b8065' }} />
                    <Typography variant="body2">{item}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>

            {/* Sofa Preview */}

            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 5,
                  overflow: 'hidden',
                  minHeight: { xs: 280, md: 420 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: '#e9e3db',
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1100&q=90"
                  alt="Customizable modern sofa"
                  sx={{
                    width: '100%',
                    height: { xs: 300, md: 420 },
                    objectFit: 'cover',
                    filter: selectedColor.filter,
                    transition: 'filter .3s',
                  }}
                />

                <Chip
                  label={`${selectedColor.name} · ${selectedFabric}`}
                  sx={{
                    position: 'absolute',
                    bottom: 16,
                    left: 16,
                    bgcolor: 'rgba(255,255,255,.9)',
                    fontWeight: 700,
                  }}
                />
              </Box>
            </Grid>

            {/* Customization Controls */}

            <Grid item xs={12} md={3}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  bgcolor: '#faf8f5',
                }}
              >
                <Typography fontWeight={800} mb={2}>
                  Sofa Color
                </Typography>

                <Stack direction="row" spacing={1.3} mb={3} flexWrap="wrap">
                  {colors.map((color) => (
                    <IconButton
                      key={color.name}
                      aria-label={color.name}
                      onClick={() => setSelectedColor(color)}
                      sx={{
                        width: 34,
                        height: 34,
                        bgcolor: color.value,
                        border: selectedColor.name === color.name
                          ? '3px solid #252421'
                          : '2px solid white',
                        outline: selectedColor.name === color.name
                          ? '1px solid #252421'
                          : 'none',
                        '&:hover': { bgcolor: color.value },
                      }}
                    />
                  ))}
                </Stack>

                <Divider sx={{ my: 2 }} />

                <Typography fontWeight={800} mb={2}>
                  Fabric Type
                </Typography>

                <Stack direction="row" flexWrap="wrap" gap={1} mb={3}>
                  {fabrics.map((fabric) => (
                    <Chip
                      key={fabric}
                      label={fabric}
                      clickable
                      onClick={() => setSelectedFabric(fabric)}
                      variant={
                        selectedFabric === fabric ? 'filled' : 'outlined'
                      }
                      sx={{
                        bgcolor: selectedFabric === fabric
                          ? '#252421'
                          : 'transparent',
                        color: selectedFabric === fabric
                          ? 'white'
                          : '#252421',
                      }}
                    />
                  ))}
                </Stack>

                <Divider sx={{ my: 2 }} />

                <Typography fontWeight={800} mb={2}>
                  Sofa Size
                </Typography>

                <Stack spacing={1}>
                  {sizes.map((size) => (
                    <Button
                      key={size.name}
                      onClick={() => setSelectedSize(size)}
                      variant={
                        selectedSize.name === size.name
                          ? 'contained'
                          : 'outlined'
                      }
                      sx={{
                        justifyContent: 'space-between',
                        borderRadius: 2,
                        textTransform: 'none',
                        bgcolor: selectedSize.name === size.name
                          ? '#252421'
                          : 'transparent',
                        color: selectedSize.name === size.name
                          ? 'white'
                          : '#252421',
                      }}
                    >
                      {size.name}
                      <b>${size.price}</b>
                    </Button>
                  ))}
                </Stack>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h5" fontWeight={800} mb={2}>
                  ${selectedSize.price}
                </Typography>

                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleOrder}
                  // endIcon={<ArrowForwardIcon />}
                  sx={{
                    bgcolor: '#252421',
                    py: 1.5,
                    borderRadius: 3,
                    textTransform: 'none',
                    '&:hover': { bgcolor: '#9b8065' },
                  }}
                >
                  Review Design
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ================================================== */}
      {/* 4. MATERIALS & CRAFTSMANSHIP */}
      {/* ================================================== */}

      <Container id="about" maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1100&q=90"
              alt="Luxury sofa and interior"
              sx={{
                width: '100%',
                height: { xs: 300, md: 480 },
                objectFit: 'cover',
                borderRadius: 5,
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Chip label="Our Craftsmanship" sx={{ mb: 2 }} />

            <Typography
              variant="h2"
              fontWeight={800}
              sx={{
                fontSize: { xs: 36, md: 50 },
                letterSpacing: '-2px',
                mb: 3,
              }}
            >
              Comfort Is in Every Detail.
            </Typography>

            <Typography color="text.secondary" lineHeight={1.9} mb={4}>
              A great sofa is more than beautiful furniture.
              It is the place where you relax, connect and create memories.
              We focus on thoughtful design and quality materials.
            </Typography>

            <Grid container spacing={3}>
              {[
                ['01', 'Premium Fabrics'],
                ['02', 'Strong Frames'],
                ['03', 'Comfortable Cushions'],
                ['04', 'Careful Finishing'],
              ].map(([number, title]) => (
                <Grid item xs={6} key={number}>
                  <Typography
                    variant="h4"
                    fontWeight={800}
                    color="#b39b81"
                  >
                    {number}
                  </Typography>
                  <Typography fontWeight={700}>{title}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Divider />

      {/* ================================================== */}
      {/* 5. COLLECTIONS */}
      {/* ================================================== */}

      <Box id="collections" sx={{ bgcolor: '#f0ece6', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl">
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', md: 'flex-end' }}
            spacing={2}
            mb={5}
          >
            <Box>
              <Chip label="Our Collections" sx={{ mb: 2 }} />

              <Typography
                variant="h2"
                fontWeight={800}
                sx={{ fontSize: { xs: 34, md: 48 }, letterSpacing: '-2px' }}
              >
                Find Your Perfect Sofa.
              </Typography>
            </Box>

            <Typography color="text.secondary" maxWidth={350}>
              Explore our collections and find the right design
              for your home.
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {collections.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.name}>
                <Card
                  elevation={0}
                  sx={{
                    borderRadius: 4,
                    overflow: 'hidden',
                    bgcolor: '#faf8f5',
                    transition: '.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,.08)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.name}
                    sx={{
                      width: '100%',
                      height: 280,
                      objectFit: 'cover',
                    }}
                  />

                  <CardContent sx={{ p: 3 }}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Box>
                        <Typography variant="h6" fontWeight={800}>
                          {item.name}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                          {item.description}
                        </Typography>
                      </Box>

                      <Typography fontWeight={800} color="#9b8065">
                        {item.price}
                      </Typography>
                    </Stack>

                    <Button
                      href="#customize"
                      fullWidth
                      // endIcon={<ArrowForwardIcon />}
                      sx={{
                        mt: 2,
                        color: '#252421',
                        justifyContent: 'space-between',
                        textTransform: 'none',
                      }}
                    >
                      Customize this style
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ================================================== */}
      {/* 6. HOW IT WORKS */}
      {/* ================================================== */}

      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
        <Box textAlign="center" mb={6}>
          <Chip label="Simple Process" sx={{ mb: 2 }} />

          <Typography
            variant="h2"
            fontWeight={800}
            sx={{ fontSize: { xs: 34, md: 48 }, letterSpacing: '-2px' }}
          >
            Your Sofa, Your Way.
          </Typography>

          <Typography color="text.secondary" mt={2}>
            From inspiration to your living room in three simple steps.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {[
            {
              number: '01',
              title: 'Choose Your Style',
              description: 'Explore our sofa collections and find your favorite.',
            },
            {
              number: '02',
              title: 'Make It Yours',
              description: 'Customize the color, fabric and dimensions.',
            },
            {
              number: '03',
              title: 'Place Your Order',
              description: 'Confirm your design and get ready for delivery.',
            },
          ].map((item) => (
            <Grid item xs={12} md={4} key={item.number}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: 4,
                  bgcolor: '#f4f0eb',
                }}
              >
                <Typography
                  variant="h2"
                  fontWeight={800}
                  color="#b39b81"
                  mb={3}
                >
                  {item.number}
                </Typography>

                <Typography variant="h5" fontWeight={800} mb={2}>
                  {item.title}
                </Typography>

                <Typography color="text.secondary" lineHeight={1.8}>
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ================================================== */}
      {/* 7. TESTIMONIAL */}
      {/* ================================================== */}

      <Box sx={{ bgcolor: '#252421', color: 'white', py: 9 }}>
        <Container maxWidth="md">
          <Box textAlign="center">
            <Typography color="#c2a78a" fontWeight={700} mb={2}>
              CUSTOMER STORIES
            </Typography>

            <Typography
              variant="h2"
              fontWeight={800}
              sx={{ fontSize: { xs: 32, md: 48 }, mb: 4 }}
            >
              Made for Living. Loved for Years.
            </Typography>

            <Stack
              direction="row"
              justifyContent="center"
              spacing={0.5}
              mb={3}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon key={star} sx={{ color: '#e6b85c' }} />
              ))}
            </Stack>

            <Typography
              variant="h6"
              fontWeight={400}
              lineHeight={1.9}
              sx={{ color: '#e2ddd7', mb: 3 }}
            >
              "The quality is incredible. Being able to customize
              the fabric and color made the whole experience
              even better. Our new sofa fits perfectly into our home."
            </Typography>

            <Typography fontWeight={800}>Sarah Mitchell</Typography>
            <Typography variant="body2" color="#b7b0a7">
              Verified Customer
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ================================================== */}
      {/* 8. FINAL CTA & FOOTER */}
      {/* ================================================== */}

      <Box id="contact" sx={{ bgcolor: '#f0ece6', pt: 8, pb: 4 }}>
        <Container maxWidth="xl">
          <Paper
            elevation={0}
            sx={{
              borderRadius: 5,
              p: { xs: 4, md: 7 },
              color: 'white',
              bgcolor: '#393530',
              backgroundImage:
                'linear-gradient(90deg, rgba(37,36,33,.97), rgba(37,36,33,.75)), url(https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1500&q=85)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <Typography
              variant="h2"
              fontWeight={800}
              sx={{ fontSize: { xs: 32, md: 48 }, mb: 2 }}
            >
              Create Your Ideal Sofa Today.
            </Typography>

            <Typography color="#e2ddd7" mb={4}>
              Bring comfort, quality and your personal style into your home.
            </Typography>

            <Button
              onClick={scrollToCustomizer}
              variant="contained"
              // endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: '#faf8f5',
                color: '#252421',
                px: 4,
                py: 1.7,
                borderRadius: 10,
                fontWeight: 800,
                textTransform: 'none',
                '&:hover': {
                  bgcolor: '#c2a78a',
                },
              }}
            >
              Start Customizing
            </Button>
          </Paper>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            sx={{ py: 5 }}
          >
            <Typography variant="h5" fontWeight={800}>
              SofaLux
            </Typography>

            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} SofaLux. All rights reserved.
            </Typography>

            <Stack direction="row" spacing={3}>
              <Typography component="a" href="#home" color="text.secondary"
                sx={{ textDecoration: 'none', fontSize: 14 }}>
                Home
              </Typography>
              <Typography component="a" href="#collections" color="text.secondary"
                sx={{ textDecoration: 'none', fontSize: 14 }}>
                Collections
              </Typography>
              <Typography component="a" href="#customize" color="text.secondary"
                sx={{ textDecoration: 'none', fontSize: 14 }}>
                Customize
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* ================================================== */}
      {/* ORDER REVIEW DIALOG */}
      {/* ================================================== */}

      {orderOpen && (
        <Box
          sx={{
            position: 'fixed',
            inset: 0,
            zIndex: 1500,
            bgcolor: 'rgba(0,0,0,.55)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
          }}
          onClick={() => setOrderOpen(false)}
        >
          <Paper
            elevation={8}
            onClick={(event) => event.stopPropagation()}
            sx={{
              width: '100%',
              maxWidth: 420,
              p: 4,
              borderRadius: 4,
            }}
          >
            <Typography variant="h5" fontWeight={800} mb={3}>
              Your Sofa Design
            </Typography>

            <Stack spacing={2}>
              <Stack direction="row" justifyContent="space-between">
                <Typography color="text.secondary">Color</Typography>
                <Typography fontWeight={700}>{selectedColor.name}</Typography>
              </Stack>

              <Stack direction="row" justifyContent="space-between">
                <Typography color="text.secondary">Fabric</Typography>
                <Typography fontWeight={700}>{selectedFabric}</Typography>
              </Stack>

              <Stack direction="row" justifyContent="space-between">
                <Typography color="text.secondary">Size</Typography>
                <Typography fontWeight={700}>{selectedSize.name}</Typography>
              </Stack>

              <Divider />

              <Stack direction="row" justifyContent="space-between">
                <Typography fontWeight={800}>Total</Typography>
                <Typography variant="h5" fontWeight={800}>
                  ${selectedSize.price}
                </Typography>
              </Stack>

              <Button
                fullWidth
                variant="contained"
                onClick={() => setOrderOpen(false)}
                sx={{
                  mt: 2,
                  bgcolor: '#252421',
                  py: 1.5,
                  borderRadius: 3,
                  textTransform: 'none',
                }}
              >
                Continue Shopping
              </Button>
            </Stack>
          </Paper>
        </Box>
      )}
    </Box>
  );
}
