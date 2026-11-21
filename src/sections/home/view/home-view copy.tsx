'use client';

import { useState } from 'react';

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';

// import SofaHeader from 'src/components/header';

// Use the browser image element through MUI Box. These URLs do not require
// next.config.ts images.remotePatterns because they are not next/image.
const sofaImages = {
  hero: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=88',
  preview: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=88',
  craftsmanship: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1100&q=88',
  cta: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=88',
};

type SofaColor = {
  name: string;
  value: string;
  filter: string;
};

type SofaSize = {
  name: string;
  price: number;
};

const colors: SofaColor[] = [
  { name: 'Cream', value: '#e6d8c7', filter: 'none' },
  { name: 'Grey', value: '#888b89', filter: 'grayscale(.8)' },
  { name: 'Olive', value: '#78806a', filter: 'sepia(.3) saturate(.8)' },
  { name: 'Brown', value: '#80604b', filter: 'sepia(.55) saturate(1.2)' },
  { name: 'Charcoal', value: '#414141', filter: 'grayscale(1) brightness(.65)' },
];

const fabrics = ['Linen', 'Velvet', 'Bouclé'];

const sizes: SofaSize[] = [
  { name: '2 Seater', price: 899 },
  { name: '3 Seater', price: 1199 },
  { name: 'L Shape', price: 1699 },
];

const collections = [
  {
    name: 'Modern Collection',
    description: 'Clean lines. Modern living.',
    price: '$899',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=85',
  },
  {
    name: 'Luxury Collection',
    description: 'Comfort meets elegance.',
    price: '$1,299',
    image: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?w=900&q=85',
  },
  {
    name: 'Classic Collection',
    description: 'Timeless design.',
    price: '$1,099',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=85',
  },
];

const benefits = [
  {
    title: 'Premium Quality',
    description: 'Built with carefully selected materials.',
    icon: <VerifiedOutlinedIcon />,
  },
  {
    title: 'Ultimate Comfort',
    description: 'Designed for everyday relaxation.',
    icon: <ChairOutlinedIcon />,
  },
  {
    title: 'Customizable Design',
    description: 'Choose your own colors and fabrics.',
    icon: <PaletteOutlinedIcon />,
  },
  {
    title: 'Fast Delivery',
    description: 'Delivered safely to your home.',
    icon: <LocalShippingOutlinedIcon />,
  },
];

const steps = [
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
];

const sectionHeadingSx = {
  fontWeight: 800,
  fontSize: { xs: 32, sm: 40, md: 48 },
  lineHeight: 1.12,
  letterSpacing: { xs: '-1.5px', md: '-2px' },
};

export default function HomeView() {
  const [selectedColor, setSelectedColor] = useState<SofaColor>(colors[0]);
  const [selectedFabric, setSelectedFabric] = useState('Linen');
  const [selectedSize, setSelectedSize] = useState<SofaSize>(sizes[1]);
  const [orderOpen, setOrderOpen] = useState(false);

  const scrollToCustomizer = () => {
    document.getElementById('customize')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleReviewDesign = () => {
    const configuration = {
      color: selectedColor.name,
      fabric: selectedFabric,
      size: selectedSize.name,
      price: selectedSize.price,
    };

    // This runs only after a user interaction, never during SSR/rendering.
    window.localStorage.setItem('sofa-configuration', JSON.stringify(configuration));
    setOrderOpen(true);
  };

  return (
    <Box sx={{ bgcolor: '#faf8f5', color: '#252421', overflow: 'hidden' }}>
      {/* <SofaHeader /> */}

      {/* 1. HERO */}
      <Box
        id="home"
        sx={{
          position: 'relative',
          minHeight: { xs: 'auto', md: 620 },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          bgcolor: '#f3eee8',
        }}
      >
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.1fr' },
              alignItems: 'center',
              gap: { xs: 3, md: 5 },
              py: { xs: 7, md: 8 },
            }}
          >
            <Box sx={{ maxWidth: 570 }}>
              <Chip
                label="Premium Sofa Collection"
                sx={{ mb: 3, bgcolor: '#e8ded3', fontWeight: 600 }}
              />
              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: 43, sm: 56, md: 68 },
                  lineHeight: 1.04,
                  fontWeight: 800,
                  letterSpacing: { xs: '-2px', md: '-3px' },
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
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  variant="contained"
                  onClick={scrollToCustomizer}
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    bgcolor: '#252421',
                    px: 3.5,
                    py: 1.5,
                    borderRadius: 99,
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
                    px: 3.5,
                    py: 1.5,
                    borderRadius: 99,
                    textTransform: 'none',
                  }}
                >
                  Explore Collections
                </Button>
              </Stack>
            </Box>

            <Box
              component="img"
              src={sofaImages.hero}
              alt="Modern premium sofa in a warm living room"
              sx={{
                display: 'block',
                width: '100%',
                height: { xs: 280, sm: 380, md: 500 },
                objectFit: 'cover',
                objectPosition: 'center',
                borderRadius: { xs: 3, md: 5 },
                boxShadow: '0 24px 60px rgba(55,45,35,.12)',
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* 2. BENEFITS */}
      <Container maxWidth="xl" sx={{ py: { xs: 5, md: 7 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, minmax(0, 1fr))', md: 'repeat(4, minmax(0, 1fr))' },
            gap: { xs: 3, md: 2 },
          }}
        >
          {benefits.map((item) => (
            <Stack key={item.title} alignItems="center" textAlign="center" spacing={1.2} sx={{ px: 1 }}>
              <Box sx={{ color: '#9b8065', '& svg': { fontSize: 36 } }}>{item.icon}</Box>
              <Typography sx={{ fontWeight: 800 }}>{item.title}</Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: 14, lineHeight: 1.6, maxWidth: 220 }}>
                {item.description}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Container>

      <Divider />

      {/* 3. SOFA CUSTOMIZER */}
      <Box id="customize" sx={{ bgcolor: '#f0ece6', py: { xs: 7, md: 11 }, scrollMarginTop: '90px' }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '0.85fr 1.15fr', lg: '0.8fr 1.2fr 0.8fr' },
              gap: { xs: 3, md: 4 },
              alignItems: 'center',
            }}
          >
            <Box>
              <Chip label="Design It Yourself" sx={{ mb: 2, bgcolor: '#e2d8cd' }} />
              <Typography component="h2" sx={{ ...sectionHeadingSx, mb: 2 }}>
                Design Your Perfect Sofa
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
                Choose your favorite colors, fabrics and sizes. See your selected design before placing an order.
              </Typography>
              <Stack spacing={1.7}>
                {[
                  'Choose your favorite color',
                  'Select your preferred fabric',
                  'Find the perfect sofa size',
                ].map((item) => (
                  <Stack direction="row" spacing={1} alignItems="center" key={item}>
                    <CheckCircleOutlineIcon sx={{ color: '#9b8065', fontSize: 20 }} />
                    <Typography sx={{ fontSize: 14 }}>{item}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>

            <Box
              sx={{
                position: 'relative',
                minWidth: 0,
                overflow: 'hidden',
                borderRadius: 4,
                bgcolor: '#e9e3db',
              }}
            >
              <Box
                component="img"
                src={sofaImages.preview}
                alt="Sofa customization preview"
                sx={{
                  display: 'block',
                  width: '100%',
                  height: { xs: 280, sm: 360, md: 410 },
                  objectFit: 'cover',
                  filter: selectedColor.filter,
                  transition: 'filter .3s ease',
                }}
              />
              <Chip
                label={`${selectedColor.name} · ${selectedFabric}`}
                sx={{ position: 'absolute', left: 16, bottom: 16, bgcolor: 'rgba(255,255,255,.92)', fontWeight: 700 }}
              />
            </Box>

            <Paper elevation={0} sx={{ p: { xs: 2.5, md: 3 }, borderRadius: 4, bgcolor: '#faf8f5' }}>
              <Typography sx={{ fontWeight: 800, mb: 1.5 }}>Sofa Color</Typography>
              <Stack direction="row" spacing={1.4} flexWrap="wrap" useFlexGap sx={{ mb: 2.5 }}>
                {colors.map((color) => (
                  <IconButton
                    key={color.name}
                    aria-label={`Select ${color.name} color`}
                    aria-pressed={selectedColor.name === color.name}
                    onClick={() => setSelectedColor(color)}
                    sx={{
                      width: 34,
                      height: 34,
                      bgcolor: color.value,
                      border: selectedColor.name === color.name ? '3px solid #252421' : '2px solid white',
                      outline: selectedColor.name === color.name ? '1px solid #252421' : 'none',
                      '&:hover': { bgcolor: color.value },
                    }}
                  />
                ))}
              </Stack>

              <Divider sx={{ my: 2 }} />

              <Typography sx={{ fontWeight: 800, mb: 1.5 }}>Fabric Type</Typography>
              <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 2.5 }}>
                {fabrics.map((fabric) => (
                  <Chip
                    key={fabric}
                    label={fabric}
                    clickable
                    onClick={() => setSelectedFabric(fabric)}
                    variant={selectedFabric === fabric ? 'filled' : 'outlined'}
                    sx={{
                      bgcolor: selectedFabric === fabric ? '#252421' : 'transparent',
                      color: selectedFabric === fabric ? '#fff' : '#252421',
                      borderColor: '#b8aea4',
                    }}
                  />
                ))}
              </Stack>

              <Divider sx={{ my: 2 }} />

              <Typography sx={{ fontWeight: 800, mb: 1.5 }}>Sofa Size</Typography>
              <Stack spacing={1}>
                {sizes.map((size) => {
                  const active = selectedSize.name === size.name;
                  return (
                    <Button
                      key={size.name}
                      onClick={() => setSelectedSize(size)}
                      variant={active ? 'contained' : 'outlined'}
                      sx={{
                        justifyContent: 'space-between',
                        borderRadius: 2,
                        textTransform: 'none',
                        borderColor: '#b8aea4',
                        bgcolor: active ? '#252421' : 'transparent',
                        color: active ? '#fff' : '#252421',
                        '&:hover': { bgcolor: active ? '#393530' : 'rgba(37,36,33,.05)' },
                      }}
                    >
                      <span>{size.name}</span>
                      <strong>${size.price.toLocaleString('en-US')}</strong>
                    </Button>
                  );
                })}
              </Stack>

              <Divider sx={{ my: 2 }} />
              <Typography sx={{ fontSize: 26, fontWeight: 800, mb: 2, color: 'black' }}>
                ${selectedSize.price.toLocaleString('en-US')}
              </Typography>
              <Button
                fullWidth
                variant="contained"
                onClick={handleReviewDesign}
                startIcon={<ArrowForwardIcon />}
                sx={{ bgcolor: '#252421', py: 1.4, borderRadius: 3, textTransform: 'none', fontWeight: 700, '&:hover': { bgcolor: '#9b8065' } }}
              >
                Review Design
              </Button>
              <Typography sx={{ mt: 1.2, color: 'text.secondary', fontSize: 11, lineHeight: 1.5 }}>
                Preview colors are visual approximations applied to the product photograph.
              </Typography>
            </Paper>
          </Box>
        </Container>
      </Box>

      {/* 4. MATERIALS & CRAFTSMANSHIP */}
      <Container id="about" maxWidth="xl" sx={{ py: { xs: 7, md: 11 }, scrollMarginTop: '90px' }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 4, md: 7 },
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            src={sofaImages.craftsmanship}
            alt="Carefully styled modern living room"
            sx={{ width: '100%', height: { xs: 300, md: 470 }, objectFit: 'cover', borderRadius: 4 }}
          />
          <Box>
            <Chip label="Our Craftsmanship" sx={{ mb: 2 }} />
            <Typography component="h2" sx={{ ...sectionHeadingSx, mb: 3 }}>
              Comfort Is in Every Detail.
            </Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.9, mb: 4 }}>
              A great sofa is more than beautiful furniture. It is the place where you relax, connect and create memories. We focus on thoughtful design and quality materials.
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 3 }}>
              {[
                ['01', 'Premium Fabrics'],
                ['02', 'Strong Frames'],
                ['03', 'Comfortable Cushions'],
                ['04', 'Careful Finishing'],
              ].map(([number, title]) => (
                <Box key={number}>
                  <Typography sx={{ fontSize: 30, fontWeight: 800, color: '#b39b81', mb: 0.5 }}>{number}</Typography>
                  <Typography sx={{ fontWeight: 700 }}>{title}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>

      <Divider />

      {/* 5. COLLECTIONS */}
      <Box id="collections" sx={{ bgcolor: '#f0ece6', py: { xs: 7, md: 11 }, scrollMarginTop: '90px' }}>
        <Container maxWidth="xl">
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', md: 'flex-end' }}
            spacing={2}
            sx={{ mb: 5 }}
          >
            <Box>
              <Chip label="Our Collections" sx={{ mb: 2 }} />
              <Typography component="h2" sx={sectionHeadingSx}>Find Your Perfect Sofa.</Typography>
            </Box>
            <Typography sx={{ color: 'text.secondary', maxWidth: 350, lineHeight: 1.7 }}>
              Explore our collections and find the right design for your home.
            </Typography>
          </Stack>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))' }, gap: 3 }}>
            {collections.map((item) => (
              <Card
                key={item.name}
                elevation={0}
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  bgcolor: '#faf8f5',
                  transition: 'transform .25s, box-shadow .25s',
                  '&:hover': { transform: 'translateY(-6px)', boxShadow: '0 20px 40px rgba(0,0,0,.08)' },
                }}
              >
                <Box component="img" src={item.image} alt={item.name} sx={{ display: 'block', width: '100%', height: 270, objectFit: 'cover' }} />
                <CardContent sx={{ p: 3 }}>
                  <Stack sx={{ alignItems: 'center', justifyContent: 'space-between', direction: 'row' }} spacing={2}>
                    <Box>
                      <Typography sx={{ fontSize: 18, fontWeight: 800, mb: 0.5 }}>{item.name}</Typography>
                      <Typography sx={{ color: 'text.secondary', fontSize: 13 }}>{item.description}</Typography>
                    </Box>
                    <Typography sx={{ color: '#9b8065', fontWeight: 800, whiteSpace: 'nowrap' }}>{item.price}</Typography>
                  </Stack>
                  <Button
                    component="a"
                    href="#customize"
                    fullWidth
                    endIcon={<ArrowForwardIcon />}
                    sx={{ mt: 2, color: '#252421', justifyContent: 'space-between', textTransform: 'none', fontWeight: 700 }}
                  >
                    Customize this style
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* 6. HOW IT WORKS */}
      <Container maxWidth="xl" sx={{ py: { xs: 7, md: 11 } }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Chip label="Simple Process" sx={{ mb: 2 }} />
          <Typography component="h2" sx={sectionHeadingSx}>Your Sofa, Your Way.</Typography>
          <Typography sx={{ color: 'text.secondary', mt: 2 }}>
            From inspiration to your living room in three simple steps.
          </Typography>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' }, gap: 3 }}>
          {steps.map((item) => (
            <Paper key={item.number} elevation={0} sx={{ p: 4, height: '100%', borderRadius: 4, bgcolor: '#f4f0eb' }}>
              <Typography sx={{ fontSize: 48, fontWeight: 800, color: '#b39b81', mb: 2 }}>{item.number}</Typography>
              <Typography sx={{ fontSize: 21, fontWeight: 800, mb: 1.5 }}>{item.title}</Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{item.description}</Typography>
            </Paper>
          ))}
        </Box>
      </Container>

      {/* 7. TESTIMONIAL */}
      <Box sx={{ bgcolor: '#252421', color: '#fff', py: { xs: 7, md: 10 } }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{ color: '#c2a78a', fontWeight: 700, mb: 2, letterSpacing: 1.5 }}>
              CUSTOMER STORIES
            </Typography>
            <Typography component="h2" sx={{ ...sectionHeadingSx, mb: 3 }}>
              Made for Living. Loved for Years.
            </Typography>
            <Stack spacing={0.4} sx={{ mb: 3, direction: 'row', justifyContent: 'center' }}>
              {[1, 2, 3, 4, 5].map((star) => <StarIcon key={star} sx={{ color: '#e6b85c' }} />)}
            </Stack>
            <Typography sx={{ color: '#e2ddd7', fontSize: { xs: 17, md: 20 }, lineHeight: 1.9, mb: 3 }}>
              “The quality is incredible. Being able to customize the fabric and color made the whole experience even better. Our new sofa fits perfectly into our home.”
            </Typography>
            <Typography sx={{ fontWeight: 800 }}>Sarah Mitchell</Typography>
            <Typography sx={{ color: '#b7b0a7', fontSize: 14 }}>Verified Customer</Typography>
          </Box>
        </Container>
      </Box>

      {/* 8. FINAL CTA & FOOTER */}
      <Box id="contact" sx={{ bgcolor: '#f0ece6', pt: { xs: 6, md: 8 }, pb: 3, scrollMarginTop: '90px' }}>
        <Container maxWidth="xl">
          <Paper
            elevation={0}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 5,
              p: { xs: 4, md: 7 },
              color: '#fff',
              bgcolor: '#393530',
              backgroundImage: `linear-gradient(90deg, rgba(37,36,33,.96), rgba(37,36,33,.68)), url(${sofaImages.cta})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <Typography component="h2" sx={{ fontSize: { xs: 31, md: 46 }, lineHeight: 1.15, fontWeight: 800, mb: 2 }}>
              Create Your Ideal Sofa Today.
            </Typography>
            <Typography sx={{ color: '#e2ddd7', mb: 4, maxWidth: 560, lineHeight: 1.7 }}>
              Bring comfort, quality and your personal style into your home.
            </Typography>
            <Button
              onClick={scrollToCustomizer}
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{ bgcolor: '#faf8f5', color: '#252421', px: 3.5, py: 1.5, borderRadius: 99, fontWeight: 800, textTransform: 'none', '&:hover': { bgcolor: '#c2a78a' } }}
            >
              Start Customizing
            </Button>
          </Paper>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            sx={{ py: 4 }}
          >
            <Typography sx={{ fontSize: 23, fontWeight: 800 }}>SofaLux</Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: 13, textAlign: 'center' }}>
              © {new Date().getFullYear()} SofaLux. All rights reserved.
            </Typography>
            <Stack direction="row" spacing={2.5}>
              {[
                ['Home', '#home'],
                ['Collections', '#collections'],
                ['Customize', '#customize'],
              ].map(([label, href]) => (
                <Typography key={href} component="a" href={href} sx={{ color: 'text.secondary', textDecoration: 'none', fontSize: 13, '&:hover': { color: '#9b8065' } }}>
                  {label}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* ORDER REVIEW */}
      <Dialog open={orderOpen} onClose={() => setOrderOpen(false)} fullWidth maxWidth="xs">
        <DialogTitle sx={{ fontWeight: 800 }}>Your Sofa Design</DialogTitle>
        <DialogContent dividers>
          <Stack spacing={2}>
            <Stack sx={{ direction: 'row', justifyContent: 'space-between' }}>
              <Typography sx={{ color: 'text.secondary' }}>Color</Typography>
              <Typography sx={{ fontWeight: 700 }}>{selectedColor.name}</Typography>
            </Stack>
            <Stack sx={{ direction: 'row', justifyContent: 'space-between' }}>
              <Typography sx={{ color: 'text.secondary' }}>Fabric</Typography>
              <Typography sx={{ fontWeight: 700 }}>{selectedFabric}</Typography>
            </Stack>
            <Stack sx={{ direction: 'row', justifyContent: 'space-between' }}>
              <Typography sx={{ color: 'text.secondary' }}>Size</Typography>
              <Typography sx={{ fontWeight: 700 }}>{selectedSize.name}</Typography>
            </Stack>
            <Divider />
            <Stack sx={{ direction: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography sx={{ fontWeight: 800 }}>Total</Typography>
              <Typography sx={{ fontSize: 24, fontWeight: 800 }}>
                ${selectedSize.price.toLocaleString('en-US')}
              </Typography>
            </Stack>
            <Typography sx={{ color: 'text.secondary', fontSize: 12, lineHeight: 1.6 }}>
              Your configuration has been saved in this browser. This demo does not submit an order or process payment.
            </Typography>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setOrderOpen(false)} sx={{ color: '#252421', textTransform: 'none' }}>
            Continue Shopping
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
