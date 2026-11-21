"use client";

import { useMemo, useState } from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import ArrowBackRounded from "@mui/icons-material/ArrowBackRounded";
import ArrowOutwardRounded from "@mui/icons-material/ArrowOutwardRounded";
import AutoAwesomeRounded from "@mui/icons-material/AutoAwesomeRounded";
import CheckCircleRounded from "@mui/icons-material/CheckCircleRounded";
import CloseRounded from "@mui/icons-material/CloseRounded";
import FavoriteBorderRounded from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRounded from "@mui/icons-material/FavoriteRounded";
import Instagram from "@mui/icons-material/Instagram";
import LocalShippingOutlined from "@mui/icons-material/LocalShippingOutlined";
import MenuRounded from "@mui/icons-material/MenuRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import AddRounded from "@mui/icons-material/AddRounded";
import RemoveRounded from "@mui/icons-material/RemoveRounded";
import StarRounded from "@mui/icons-material/StarRounded";
import TuneRounded from "@mui/icons-material/TuneRounded";
import VerifiedOutlined from "@mui/icons-material/VerifiedOutlined";
import DesignServicesOutlined from "@mui/icons-material/DesignServicesOutlined";
import SupportAgentOutlined from "@mui/icons-material/SupportAgentOutlined";
import KeyboardArrowDownRounded from "@mui/icons-material/KeyboardArrowDownRounded";

export default function FurnitureLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedFabric, setSelectedFabric] = useState("sand");
  const [selectedLeg, setSelectedLeg] = useState("walnut");
  const [seatCount, setSeatCount] = useState(3);
  const [openFaq, setOpenFaq] = useState<number>(0);
  const [favorites, setFavorites] = useState<number[]>([]);

  const gold = "#C6A477";
  const background = "#090909";
  const surface = "#141414";
  const muted = "#99948C";
  const cream = "#F2EEE7";

  const fabrics = [
    {
      id: "sand",
      name: "شن روشن",
      color: "#CDBFA9",
      price: 0,
      description: "پارچه کتان بافت‌دار",
    },
    {
      id: "olive",
      name: "زیتونی",
      color: "#626B4F",
      price: 1200000,
      description: "پارچه مخمل لطیف",
    },
    {
      id: "charcoal",
      name: "ذغالی",
      color: "#454545",
      price: 800000,
      description: "پارچه کتان پریمیوم",
    },
    {
      id: "terracotta",
      name: "آجری",
      color: "#A85E48",
      price: 1500000,
      description: "پارچه مخمل لوکس",
    },
    {
      id: "cream",
      name: "کرم",
      color: "#E4DCCB",
      price: 500000,
      description: "پارچه لینن طبیعی",
    },
  ] as const;

  const legs = [
    {
      id: "walnut",
      name: "چوب گردو",
      price: 0,
      color: "#775034",
    },
    {
      id: "black",
      name: "مشکی مات",
      price: 500000,
      color: "#252525",
    },
    {
      id: "brass",
      name: "طلایی",
      price: 1100000,
      color: "#B99A65",
    },
  ] as const;

  const selectedFabricData = fabrics.find(
    (item) => item.id === selectedFabric
  );

  const selectedLegData = legs.find(
    (item) => item.id === selectedLeg
  );

  const basePrice = 48900000;

  const estimatedPrice = useMemo(() => {
    const fabricPrice =
      fabrics.find((item) => item.id === selectedFabric)?.price ?? 0;

    const legPrice =
      legs.find((item) => item.id === selectedLeg)?.price ?? 0;

    return (
      basePrice +
      fabricPrice +
      legPrice +
      (seatCount - 3) * 7500000
    );
  }, [selectedFabric, selectedLeg, seatCount]);

  const formatPrice = (price: number) =>
    `${new Intl.NumberFormat("fa-IR").format(price)} تومان`;

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const products = [
    {
      id: 1,
      name: "مبل راحتی آریا",
      category: "COLLECTION / 01",
      price: "از ۴۸,۹۰۰,۰۰۰ تومان",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85",
      badge: "پرفروش",
    },
    {
      id: 2,
      name: "مبل مدرن لونا",
      category: "COLLECTION / 02",
      price: "از ۵۶,۵۰۰,۰۰۰ تومان",
      image:
        "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1000&q=85",
      badge: "جدید",
    },
    {
      id: 3,
      name: "مبل مینیمال آرتا",
      category: "COLLECTION / 03",
      price: "از ۴۲,۰۰۰,۰۰۰ تومان",
      image:
        "https://images.unsplash.com/photo-1598300056393-4aac492f4344?auto=format&fit=crop&w=1000&q=85",
      badge: "",
    },
  ];

  const faqs = [
    {
      question: "چطور می‌توانم مبل خودم را شخصی‌سازی کنم؟",
      answer:
        "محصول موردنظرتان را انتخاب کنید. سپس در محیط طراحی سه‌بعدی، رنگ پارچه، نوع متریال، پایه‌ها و سایر جزئیات را تغییر دهید. پیش‌نمایش تغییرات را قبل از ثبت سفارش مشاهده خواهید کرد.",
    },
    {
      question: "آیا رنگ نمایش داده شده در مدل سه‌بعدی دقیق است؟",
      answer:
        "رنگ نمایشگرها ممکن است کمی با رنگ واقعی پارچه متفاوت باشد. برای انتخاب دقیق‌تر می‌توانید نمونه پارچه را از مجموعه ما درخواست کنید.",
    },
    {
      question: "مدت زمان ساخت و تحویل مبل چقدر است؟",
      answer:
        "زمان ساخت به مدل، ابعاد و جزئیات سفارش بستگی دارد. زمان دقیق تحویل پیش از نهایی کردن سفارش به شما اعلام می‌شود.",
    },
    {
      question: "آیا امکان تغییر ابعاد مبل هم وجود دارد؟",
      answer:
        "بله. بسته به مدل انتخابی، می‌توانید ابعاد و تعداد نشیمن را تغییر دهید و سفارش را متناسب با فضای منزل خود ثبت کنید.",
    },
  ];

  const navItems = [
    { label: "خانه", href: "#home" },
    { label: "محصولات", href: "#products" },
    { label: "شخصی‌سازی", href: "#customizer" },
    { label: "داستان ما", href: "#about" },
    { label: "سؤالات متداول", href: "#faq" },
  ];

  return (
    <Box
      dir="rtl"
      sx={{
        minHeight: "100vh",
        bgcolor: background,
        color: cream,
        overflow: "hidden",
        fontFamily: "Vazirmatn, IRANSans, Tahoma, sans-serif",
        "& *": {
          boxSizing: "border-box",
        },
        "& a": {
          color: "inherit",
          textDecoration: "none",
        },
        "& button": {
          fontFamily: "inherit",
        },
        scrollBehavior: "smooth",
      }}
    >
      {/* HEADER */}

      <Box
        component="header"
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          bgcolor: "rgba(9,9,9,0.88)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <Container maxWidth="xl">
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              height: { xs: 72, md: 88 },
            }}
          >
            {/* Logo */}

            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 1.2,
              }}
            >
              <Box
                sx={{
                  width: 39,
                  height: 39,
                  border: `1px solid ${gold}`,
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  color: gold,
                  fontSize: 20,
                  fontFamily: "serif",
                }}
              >
                N
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: 23,
                    fontWeight: 800,
                    letterSpacing: 3,
                    lineHeight: 1,
                    color: cream,
                  }}
                >
                  NOVA
                </Typography>

                <Typography
                  sx={{
                    fontSize: 8,
                    letterSpacing: 3.5,
                    color: muted,
                    mt: 0.5,
                  }}
                >
                  DESIGN YOUR COMFORT
                </Typography>
              </Box>
            </Stack>

            {/* Desktop Navigation */}

            <Stack
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: "row",
                alignItems: "center",
                gap: { md: 3, lg: 4 },
              }}
            >
              {navItems.map((item) => (
                <Typography
                  key={item.href}
                  component="a"
                  href={item.href}
                  sx={{
                    fontSize: 13,
                    color: "#BDB8B1",
                    transition: "0.2s",
                    "&:hover": {
                      color: gold,
                    },
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Stack>

            {/* Header Actions */}

            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <Button
                component="a"
                href="#customizer"
                endIcon={<ArrowOutwardRounded />}
                sx={{
                  display: { xs: "none", sm: "inline-flex" },
                  color: background,
                  bgcolor: gold,
                  borderRadius: 0,
                  px: 2.5,
                  py: 1.2,
                  fontSize: 12,
                  fontWeight: 800,
                  "&:hover": {
                    bgcolor: "#D6B991",
                  },
                }}
              >
                طراحی مبل من
              </Button>

              <IconButton
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                sx={{
                  display: { xs: "flex", md: "none" },
                  color: cream,
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 0,
                }}
              >
                {mobileMenuOpen ? <CloseRounded /> : <MenuRounded />}
              </IconButton>
            </Stack>
          </Stack>

          {/* Mobile Navigation */}

          {mobileMenuOpen && (
            <Stack
              sx={{
                display: { xs: "flex", md: "none" },
                flexDirection: "column",
                gap: 2,
                pb: 2.5,
              }}
            >
              {navItems.map((item) => (
                <Typography
                  key={item.href}
                  component="a"
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  sx={{
                    color: "#C5C0B9",
                    fontSize: 14,
                    py: 0.5,
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Stack>
          )}
        </Container>
      </Box>

      {/* HERO */}

      <Box
        id="home"
        sx={{
          position: "relative",
          pt: { xs: 6, md: 10 },
          pb: { xs: 7, md: 11 },
          background:
            "radial-gradient(ellipse at 15% 30%, rgba(198,164,119,0.09), transparent 38%)",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "0.9fr 1.1fr",
              },
              alignItems: "center",
              gap: { xs: 5, md: 7 },
            }}
          >
            {/* Hero Content */}

            <Box sx={{ position: "relative", zIndex: 2 }}>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 1,
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    width: 35,
                    height: 1,
                    bgcolor: gold,
                  }}
                />

                <Typography
                  sx={{
                    color: gold,
                    fontSize: 11,
                    letterSpacing: 2.5,
                    fontWeight: 700,
                  }}
                >
                  THE ART OF LIVING
                </Typography>
              </Stack>

              <Typography
                sx={{
                  fontSize: {
                    xs: 38,
                    sm: 52,
                    md: 62,
                    lg: 76,
                  },
                  fontWeight: 900,
                  lineHeight: 1.5,
                  letterSpacing: -1.5,
                  maxWidth: 650,
                }}
              >
                مبل شما،
                <Box
                  component="span"
                  sx={{
                    display: "block",
                    color: gold,
                    fontFamily: "peyda-bold"
                  }}
                >
                  امضای سلیقه شما.
                </Box>
              </Typography>

              <Typography
                sx={{
                  color: "#A8A39B",
                  fontSize: { xs: 14, md: 16 },
                  lineHeight: 2.4,
                  mt: 2.5,
                  maxWidth: 460,
                }}
              >
                مبلمان فقط یک وسیله نیست؛ بخشی از شخصیت فضای زندگی شماست.
                مدلی را انتخاب کنید، رنگش را تغییر دهید و دقیقاً همان چیزی
                را بسازید که در ذهن دارید.
              </Typography>

              <Stack
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignContent: 'center',
                  gap: 2,
                  mt: 4,
                }}
              >
                <Button
                  component="a"
                  href="#customizer"
                  endIcon={<ArrowBackRounded sx={{ mr: 1 }} />}
                  sx={{
                    bgcolor: gold,
                    color: background,
                    px: 3.5,
                    py: 1.8,
                    borderRadius: 0,
                    fontWeight: 800,
                    fontSize: 13,
                    "&:hover": {
                      bgcolor: "#D6B991",
                    },
                  }}
                >
                  مبل خودت رو طراحی کن
                </Button>

                <Button
                  component="a"
                  href="#products"
                  startIcon={<PlayArrowRounded sx={{ ml: 1 }} />}
                  sx={{
                    color: cream,
                    border: "1px solid rgba(255,255,255,0.2)",
                    px: 3,
                    py: 1.8,
                    borderRadius: 0,
                    fontSize: 13,
                    "&:hover": {
                      borderColor: gold,
                      color: gold,
                    },
                  }}
                >
                  مشاهده محصولات
                </Button>
              </Stack>

              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,
                  mt: 6,
                  pt: 3,
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  maxWidth: 440,
                }}
              >
                {[
                  { number: "۱۰۰٪", label: "سفارشی‌سازی" },
                  { number: "۳D", label: "پیش‌نمایش محصول" },
                  { number: "۵ سال", label: "ضمانت کیفیت" },
                ].map((item) => (
                  <Box key={item.label}>
                    <Typography
                      sx={{
                        fontSize: 22,
                        color: gold,
                        fontWeight: 800,
                      }}
                    >
                      {item.number}
                    </Typography>

                    <Typography
                      sx={{
                        color: muted,
                        fontSize: 10,
                        mt: 0.5,
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>

            {/* Hero Image */}

            <Box
              sx={{
                position: "relative",
                minHeight: { xs: 360, sm: 470, md: 590 },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  inset: "5% 4% 5% 0",
                  border: `1px solid rgba(198,164,119,0.35)`,
                  transform: "translate(12px, 12px)",
                }}
              />

              <Box
                component="img"
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=90"
                alt="مبل مدرن در فضای داخلی لوکس"
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 360, sm: 470, md: 590 },
                  objectFit: "cover",
                  filter: "brightness(0.85)",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(0deg, rgba(9,9,9,0.55), transparent 50%)",
                  pointerEvents: "none",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  bottom: { xs: 20, md: 40 },
                  right: { xs: -5, md: -35 },
                  bgcolor: "#1B1B1B",
                  border: "1px solid rgba(255,255,255,0.1)",
                  p: 2.3,
                  width: 205,
                  boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
                }}
              >
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <AutoAwesomeRounded sx={{ color: gold, fontSize: 19 }} />

                  <Typography sx={{ color: gold, fontSize: 10 }}>
                    NOVA CUSTOM DESIGN
                  </Typography>
                </Stack>

                <Typography
                  sx={{
                    fontSize: 15,
                    fontWeight: 700,
                    mt: 1.5,
                  }}
                >
                  متفاوت طراحی کن.
                </Typography>

                <Typography
                  sx={{
                    color: muted,
                    fontSize: 11,
                    mt: 0.5,
                    lineHeight: 2,
                  }}
                >
                  جزئیات کوچک، تفاوت‌های بزرگ می‌سازند.
                </Typography>
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  top: 25,
                  left: 25,
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  bgcolor: "rgba(9,9,9,0.7)",
                  px: 1.5,
                  py: 1,
                  backdropFilter: "blur(10px)",
                }}
              >
                <Box
                  sx={{
                    width: 7,
                    height: 7,
                    bgcolor: "#8BB58B",
                    borderRadius: "50%",
                  }}
                />

                <Typography sx={{ fontSize: 10, color: cream, mb: "0px!important" }}>
                  MADE FOR YOUR SPACE
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* BRAND STRIP */}

      <Box
        sx={{
          bgcolor: "#111",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          py: 3,
        }}
      >
        <Container maxWidth="xl">
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {[
              "DESIGNED WITH PASSION",
              "CRAFTED WITH CARE",
              "MADE FOR YOUR HOME",
              "BUILT TO LAST",
            ].map((item) => (
              <Typography
                key={item}
                sx={{
                  color: "#77736D",
                  fontSize: { xs: 9, sm: 11 },
                  letterSpacing: 2,
                  fontWeight: 700,
                }}
              >
                ✦ {item}
              </Typography>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* CUSTOMIZER SECTION */}

      <Box
        id="customizer"
        sx={{
          py: { xs: 8, md: 13 },
          background:
            "radial-gradient(ellipse at 80% 40%, rgba(198,164,119,0.06), transparent 40%)",
        }}
      >
        <Container maxWidth="xl">
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 5,
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: gold,
                  fontSize: 11,
                  letterSpacing: 2,
                  fontWeight: 700,
                  mb: 1.5,
                }}
              >
                YOUR DESIGN STUDIO
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 27, md: 40 },
                  fontWeight: 900,
                }}
              >
                خودت طراح باش.
              </Typography>

              <Typography
                sx={{
                  color: muted,
                  fontSize: 13,
                  mt: 1.5,
                  lineHeight: 2,
                }}
              >
                انتخاب کن، تغییر بده و نتیجه را ببین.
              </Typography>
            </Box>

            <Chip
              icon={<TuneRounded sx={{ color: `${gold} !important` }} />}
              label="LIVE CUSTOMIZATION"
              sx={{
                display: { xs: "none", sm: "flex" },
                color: gold,
                bgcolor: "rgba(198,164,119,0.08)",
                border: "1px solid rgba(198,164,119,0.2)",
                borderRadius: 0,
                fontSize: 9,
                letterSpacing: 1,
              }}
            />
          </Stack>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "0.8fr 1.2fr",
              },
              bgcolor: surface,
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Customization Controls */}

            <Box
              sx={{
                p: { xs: 2.5, sm: 4, md: 4.5 },
                order: { xs: 2, md: 1 },
              }}
            >
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: 21,
                      fontWeight: 800,
                    }}
                  >
                    مبل آریا
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 11,
                      color: muted,
                      mt: 0.5,
                    }}
                  >
                    مدل سه نفره / طراحی اختصاصی
                  </Typography>
                </Box>

                <Chip
                  label="CUSTOM"
                  sx={{
                    height: 25,
                    bgcolor: "rgba(198,164,119,0.1)",
                    color: gold,
                    borderRadius: 0,
                    fontSize: 9,
                  }}
                />
              </Stack>

              <Divider
                sx={{
                  borderColor: "rgba(255,255,255,0.1)",
                  my: 3,
                }}
              />

              {/* Fabric Selection */}

              <Box>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 2,
                  }}
                >
                  <Typography sx={{ fontSize: 13, fontWeight: 700 }}>
                    انتخاب رنگ پارچه
                  </Typography>

                  <Typography sx={{ fontSize: 11, color: gold }}>
                    {selectedFabricData?.name}
                  </Typography>
                </Stack>

                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1.7,
                    flexWrap: "wrap",
                  }}
                >
                  {fabrics.map((fabric) => (
                    <Box
                      key={fabric.id}
                      onClick={() => setSelectedFabric(fabric.id)}
                      sx={{
                        cursor: "pointer",
                        textAlign: "center",
                      }}
                    >
                      <Box
                        component="button"
                        type="button"
                        aria-label={`انتخاب رنگ ${fabric.name}`}
                        sx={{
                          width: 39,
                          height: 39,
                          p: 0,
                          borderRadius: "50%",
                          bgcolor: fabric.color,
                          border:
                            selectedFabric === fabric.id
                              ? `3px solid ${gold}`
                              : "2px solid transparent",
                          outline:
                            selectedFabric === fabric.id
                              ? `1px solid ${gold}`
                              : "none",
                          outlineOffset: 3,
                          cursor: "pointer",
                          transition: "0.2s",
                        }}
                      />

                      <Typography
                        sx={{
                          fontSize: 9,
                          color:
                            selectedFabric === fabric.id ? gold : muted,
                          mt: 1,
                        }}
                      >
                        {fabric.name}
                      </Typography>
                    </Box>
                  ))}
                </Stack>

                <Typography
                  sx={{
                    color: "#777",
                    fontSize: 10,
                    mt: 1.5,
                  }}
                >
                  {selectedFabricData?.description}
                </Typography>
              </Box>

              <Divider
                sx={{
                  borderColor: "rgba(255,255,255,0.1)",
                  my: 3,
                }}
              />

              {/* Leg Selection */}

              <Box>
                <Typography
                  sx={{
                    fontSize: 13,
                    fontWeight: 700,
                    mb: 2,
                  }}
                >
                  نوع پایه مبل
                </Typography>

                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1,
                  }}
                >
                  {legs.map((leg) => (
                    <Box
                      key={leg.id}
                      onClick={() => setSelectedLeg(leg.id)}
                      sx={{
                        flex: 1,
                        cursor: "pointer",
                        border:
                          selectedLeg === leg.id
                            ? `1px solid ${gold}`
                            : "1px solid rgba(255,255,255,0.12)",
                        bgcolor:
                          selectedLeg === leg.id
                            ? "rgba(198,164,119,0.08)"
                            : "transparent",
                        p: 1.2,
                        transition: "0.2s",
                      }}
                    >
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          bgcolor: leg.color,
                          border: "1px solid rgba(255,255,255,0.2)",
                          mb: 1,
                        }}
                      />

                      <Typography
                        sx={{
                          fontSize: 10,
                          color: cream,
                        }}
                      >
                        {leg.name}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>

              <Divider
                sx={{
                  borderColor: "rgba(255,255,255,0.1)",
                  my: 3,
                }}
              />

              {/* Seat Count */}

              <Box>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography sx={{ fontSize: 13, fontWeight: 700 }}>
                      تعداد نشیمن
                    </Typography>

                    <Typography
                      sx={{
                        color: muted,
                        fontSize: 10,
                        mt: 0.5,
                      }}
                    >
                      متناسب با فضای منزل شما
                    </Typography>
                  </Box>

                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 1.5,
                      border: "1px solid rgba(255,255,255,0.15)",
                      px: 0.7,
                      py: 0.3,
                    }}
                  >
                    <IconButton
                      disabled={seatCount <= 2}
                      onClick={() =>
                        setSeatCount((prev) => Math.max(2, prev - 1))
                      }
                      sx={{
                        width: 30,
                        height: 30,
                        color: cream,
                      }}
                    >
                      <RemoveRounded fontSize="small" />
                    </IconButton>

                    <Typography
                      sx={{
                        fontSize: 16,
                        minWidth: 15,
                        textAlign: "center",
                      }}
                    >
                      {new Intl.NumberFormat("fa-IR").format(seatCount)}
                    </Typography>

                    <IconButton
                      disabled={seatCount >= 5}
                      onClick={() =>
                        setSeatCount((prev) => Math.min(5, prev + 1))
                      }
                      sx={{
                        width: 30,
                        height: 30,
                        color: cream,
                      }}
                    >
                      <AddRounded fontSize="small" />
                    </IconButton>
                  </Stack>
                </Stack>
              </Box>

              {/* Price */}

              <Box
                sx={{
                  mt: 4,
                  p: 2.5,
                  bgcolor: "#202020",
                  border: "1px solid rgba(198,164,119,0.22)",
                }}
              >
                <Typography
                  sx={{
                    color: muted,
                    fontSize: 11,
                  }}
                >
                  برآورد قیمت محصول شما
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: 22, sm: 26 },
                    color: gold,
                    fontWeight: 900,
                    mt: 1,
                  }}
                >
                  {formatPrice(estimatedPrice)}
                </Typography>

                <Typography
                  sx={{
                    color: "#777",
                    fontSize: 9,
                    mt: 1,
                  }}
                >
                  قیمت نهایی پس از تأیید جزئیات سفارش مشخص می‌شود.
                </Typography>

                <Button
                  endIcon={<ArrowBackRounded />}
                  sx={{
                    width: "100%",
                    mt: 2.5,
                    bgcolor: gold,
                    color: background,
                    borderRadius: 0,
                    py: 1.6,
                    fontWeight: 800,
                    fontSize: 12,
                    "&:hover": {
                      bgcolor: "#D6B991",
                    },
                  }}
                >
                  ثبت درخواست طراحی
                </Button>
              </Box>
            </Box>

            {/* Product Preview */}

            <Box
              sx={{
                minHeight: { xs: 350, sm: 470, md: 610 },
                position: "relative",
                overflow: "hidden",
                bgcolor: "#242320",
                order: { xs: 1, md: 2 },
              }}
            >
              {/* Replace this image with your GLB viewer */}

              <Box
                component="img"
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1500&q=90"
                alt="پیش‌نمایش مبل آریا"
                sx={{
                  width: "100%",
                  height: "100%",
                  minHeight: { xs: 350, sm: 470, md: 610 },
                  objectFit: "cover",
                  filter: "brightness(0.85)",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.35), transparent 38%, rgba(0,0,0,0.55))",
                  pointerEvents: "none",
                }}
              />

              <Chip
                icon={
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      bgcolor: "#8DC58E",
                      borderRadius: "50%",
                    }}
                  />
                }
                label="PRODUCT PREVIEW"
                sx={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  bgcolor: "rgba(10,10,10,0.75)",
                  color: cream,
                  borderRadius: 0,
                  fontSize: 9,
                  backdropFilter: "blur(10px)",
                }}
              />

              <Stack
                sx={{
                  position: "absolute",
                  bottom: 25,
                  left: 25,
                  right: 25,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 2,
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      color: cream,
                      fontSize: 18,
                      fontWeight: 800,
                    }}
                  >
                    مبل آریا
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 11,
                      color: "#D0CBC2",
                      mt: 0.5,
                    }}
                  >
                    {selectedFabricData?.name} · {selectedLegData?.name}
                  </Typography>
                </Box>

                <Chip
                  icon={<AutoAwesomeRounded />}
                  label="3D READY"
                  sx={{
                    color: gold,
                    bgcolor: "rgba(9,9,9,0.75)",
                    borderRadius: 0,
                    fontSize: 9,
                    "& .MuiChip-icon": {
                      color: gold,
                    },
                  }}
                />
              </Stack>
            </Box>
          </Box>

          <Typography
            sx={{
              fontSize: 10,
              color: "#777",
              mt: 2,
              textAlign: "center",
            }}
          >
            این نسخه از صفحه دارای پیش‌نمایش تصویری است؛ برای مشاهده تغییرات
            واقعی روی مدل، Viewer سه‌بعدی محصول را به بخش پیش‌نمایش متصل کنید.
          </Typography>
        </Container>
      </Box>

      {/* PRODUCTS SECTION */}

      <Box
        id="products"
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: "#111",
        }}
      >
        <Container maxWidth="xl">
          <Stack
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "flex-start", sm: "end" },
              justifyContent: "space-between",
              mb: 5,
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: gold,
                  fontSize: 11,
                  letterSpacing: 2,
                  mb: 1.5,
                  fontWeight: 700,
                }}
              >
                OUR COLLECTION
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 28, md: 40 },
                  fontWeight: 900,
                }}
              >
                انتخابی برای هر سلیقه.
              </Typography>

              <Typography
                sx={{
                  mt: 1.5,
                  fontSize: 13,
                  color: muted,
                }}
              >
                مدل موردعلاقه‌ات را پیدا کن و آن را به سبک خودت تغییر بده.
              </Typography>
            </Box>

            <Button
              endIcon={<ArrowBackRounded />}
              component="a"
              href="#customizer"
              sx={{
                color: gold,
                mt: { xs: 2, sm: 0 },
                fontSize: 12,
                borderBottom: `1px solid ${gold}`,
                borderRadius: 0,
              }}
            >
              مشاهده همه محصولات
            </Button>
          </Stack>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: 3,
            }}
          >
            {products.map((product) => (
              <Box
                key={product.id}
                sx={{
                  overflow: "hidden",
                  bgcolor: "#191919",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: { xs: 270, sm: 280, md: 320 },
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.6s",
                      "&:hover": {
                        transform: "scale(1.06)",
                      },
                    }}
                  />

                  {product.badge && (
                    <Chip
                      label={product.badge}
                      sx={{
                        position: "absolute",
                        top: 15,
                        right: 15,
                        height: 25,
                        bgcolor: gold,
                        color: background,
                        borderRadius: 0,
                        fontWeight: 800,
                        fontSize: 10,
                      }}
                    />
                  )}

                  <IconButton
                    onClick={() => toggleFavorite(product.id)}
                    sx={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      width: 40,
                      height: 40,
                      color: favorites.includes(product.id)
                        ? "#DE7777"
                        : cream,
                      bgcolor: "rgba(0,0,0,0.65)",
                      borderRadius: 0,
                      "&:hover": {
                        bgcolor: "rgba(0,0,0,0.85)",
                      },
                    }}
                  >
                    {favorites.includes(product.id) ? (
                      <FavoriteRounded />
                    ) : (
                      <FavoriteBorderRounded />
                    )}
                  </IconButton>

                  <Button
                    component="a"
                    href="#customizer"
                    endIcon={<ArrowOutwardRounded />}
                    sx={{
                      position: "absolute",
                      bottom: 15,
                      right: 15,
                      left: 15,
                      bgcolor: "rgba(9,9,9,0.85)",
                      color: cream,
                      borderRadius: 0,
                      py: 1.2,
                      backdropFilter: "blur(10px)",
                      fontSize: 11,
                      "&:hover": {
                        bgcolor: gold,
                        color: background,
                      },
                    }}
                  >
                    شخصی‌سازی این مدل
                  </Button>
                </Box>

                <Box sx={{ p: 2.5 }}>
                  <Typography
                    sx={{
                      color: gold,
                      fontSize: 9,
                      letterSpacing: 2,
                    }}
                  >
                    {product.category}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 19,
                      fontWeight: 800,
                      mt: 1,
                    }}
                  >
                    {product.name}
                  </Typography>

                  <Divider
                    sx={{
                      my: 2,
                      borderColor: "rgba(255,255,255,0.1)",
                    }}
                  />

                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#B7B2A9",
                        fontSize: 11,
                      }}
                    >
                      {product.price}
                    </Typography>

                    <ArrowBackRounded
                      sx={{ color: gold, fontSize: 19 }}
                    />
                  </Stack>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ABOUT SECTION */}

      <Box
        id="about"
        sx={{
          py: { xs: 8, md: 13 },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },
              alignItems: "center",
              gap: { xs: 5, md: 9 },
            }}
          >
            <Box
              sx={{
                position: "relative",
                minHeight: { xs: 340, md: 540 },
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
                alt="فضای داخلی مدرن و مینیمال"
                sx={{
                  width: "90%",
                  height: { xs: 340, md: 500 },
                  objectFit: "cover",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: { xs: 145, md: 210 },
                  bgcolor: gold,
                  color: background,
                  p: { xs: 2, md: 3 },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 27, md: 42 },
                    fontWeight: 900,
                    lineHeight: 1,
                  }}
                >
                  ۰۱
                </Typography>

                <Typography
                  sx={{
                    fontSize: 11,
                    fontWeight: 800,
                    mt: 1,
                  }}
                >
                  طراحی با نگاه متفاوت
                </Typography>
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  top: 25,
                  right: 0,
                  border: `1px solid ${gold}`,
                  width: "30%",
                  height: "65%",
                  zIndex: -1,
                }}
              />
            </Box>

            <Box>
              <Typography
                sx={{
                  color: gold,
                  fontSize: 11,
                  letterSpacing: 2,
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                MORE THAN FURNITURE
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 29, md: 43 },
                  fontWeight: 900,
                  lineHeight: 1.6,
                }}
              >
                خانه شما،
                <Box component="span" sx={{ color: gold }}>
                  {" "}
                  قوانین خودش را دارد.
                </Box>
              </Typography>

              <Typography
                sx={{
                  color: "#A6A199",
                  fontSize: 14,
                  lineHeight: 2.5,
                  mt: 2.5,
                }}
              >
                ما باور داریم یک انتخاب درست، از توجه به جزئیات شروع می‌شود.
                از فرم و ابعاد گرفته تا رنگ پارچه و جنس پایه‌ها؛ همه‌چیز باید
                با فضای زندگی شما هماهنگ باشد.
              </Typography>

              <Typography
                sx={{
                  color: "#A6A199",
                  fontSize: 14,
                  lineHeight: 2.5,
                  mt: 1.5,
                }}
              >
                به همین دلیل، به‌جای محدود کردن شما به محصولات آماده، امکان
                طراحی و سفارش اختصاصی را فراهم کرده‌ایم تا محصول نهایی واقعاً
                متعلق به شما باشد.
              </Typography>

              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2.5,
                  mt: 4,
                }}
              >
                {[
                  {
                    icon: <DesignServicesOutlined />,
                    title: "طراحی متناسب با سلیقه شما",
                    description: "از انتخاب فرم تا کوچک‌ترین جزئیات",
                  },
                  {
                    icon: <VerifiedOutlined />,
                    title: "کیفیت در ساخت",
                    description: "توجه به متریال، راحتی و دوام محصول",
                  },
                  {
                    icon: <SupportAgentOutlined />,
                    title: "همراهی تا تحویل",
                    description: "مشاوره و پشتیبانی در تمام مراحل سفارش",
                  },
                ].map((item) => (
                  <Stack
                    key={item.title}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 47,
                        height: 47,
                        flexShrink: 0,
                        display: "grid",
                        placeItems: "center",
                        border: "1px solid rgba(198,164,119,0.35)",
                        color: gold,
                      }}
                    >
                      {item.icon}
                    </Box>

                    <Box>
                      <Typography
                        sx={{ fontSize: 13, fontWeight: 800 }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: 11,
                          color: muted,
                          mt: 0.6,
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* PROCESS SECTION */}

      <Box
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: "#111",
          position: "relative",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 7 }}>
            <Typography
              sx={{
                color: gold,
                fontSize: 11,
                letterSpacing: 2,
                fontWeight: 700,
              }}
            >
              HOW IT WORKS
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 28, md: 40 },
                fontWeight: 900,
                mt: 1.5,
              }}
            >
              از ایده تا خانه شما.
            </Typography>

            <Typography
              sx={{
                color: muted,
                fontSize: 13,
                mt: 1.5,
              }}
            >
              تنها در چند مرحله، مبل دلخواهتان را سفارش دهید.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: 2,
            }}
          >
            {[
              {
                number: "01",
                icon: <CheckCircleRounded />,
                title: "انتخاب مدل",
                description:
                  "از بین مدل‌های متنوع، مبل مورد علاقه‌ات را انتخاب کن.",
              },
              {
                number: "02",
                icon: <TuneRounded />,
                title: "شخصی‌سازی",
                description:
                  "رنگ، پارچه، پایه و مشخصات محصول را تغییر بده.",
              },
              {
                number: "03",
                icon: <AutoAwesomeRounded />,
                title: "تأیید نهایی",
                description:
                  "پیش‌نمایش سه‌بعدی و جزئیات سفارش را بررسی کن.",
              },
              {
                number: "04",
                icon: <LocalShippingOutlined />,
                title: "تحویل سفارش",
                description:
                  "محصول اختصاصی خودت را در محل موردنظر تحویل بگیر.",
              },
            ].map((step, index) => (
              <Box
                key={step.number}
                sx={{
                  position: "relative",
                  border: "1px solid rgba(255,255,255,0.08)",
                  p: 3,
                  minHeight: 225,
                  transition: "0.3s",
                  "&:hover": {
                    borderColor: "rgba(198,164,119,0.5)",
                    bgcolor: "rgba(198,164,119,0.035)",
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      color: gold,
                      fontSize: 30,
                      fontWeight: 900,
                      opacity: 0.7,
                    }}
                  >
                    {step.number}
                  </Typography>

                  <Box
                    sx={{
                      color: gold,
                      width: 43,
                      height: 43,
                      display: "grid",
                      placeItems: "center",
                      border: "1px solid rgba(198,164,119,0.3)",
                    }}
                  >
                    {step.icon}
                  </Box>
                </Stack>

                <Typography
                  sx={{
                    fontSize: 17,
                    fontWeight: 800,
                    mt: 3,
                  }}
                >
                  {step.title}
                </Typography>

                <Typography
                  sx={{
                    color: muted,
                    fontSize: 12,
                    lineHeight: 2.2,
                    mt: 1.2,
                  }}
                >
                  {step.description}
                </Typography>

                {index !== 3 && (
                  <ArrowBackRounded
                    sx={{
                      position: "absolute",
                      left: 12,
                      bottom: 14,
                      fontSize: 17,
                      color: "#62594C",
                      display: { xs: "none", md: "block" },
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* FEATURE BANNER */}

      <Box
        sx={{
          py: { xs: 6, md: 9 },
          background:
            "linear-gradient(110deg, #B08D61 0%, #D0B18A 50%, #A9855D 100%)",
          color: "#17130F",
        }}
      >
        <Container maxWidth="xl">
          <Stack
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "center" },
              justifyContent: "space-between",
              gap: 3,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: 26, md: 39 },
                  fontWeight: 900,
                }}
              >
                یک مبل معمولی نخر!
              </Typography>

              <Typography
                sx={{
                  fontSize: 13,
                  mt: 1.5,
                  opacity: 0.8,
                  lineHeight: 2,
                }}
              >
                چیزی بساز که فقط در خانه تو وجود داشته باشد.
              </Typography>
            </Box>

            <Button
              component="a"
              href="#customizer"
              endIcon={<ArrowBackRounded sx={{ mr: 2 }} />}
              sx={{
                bgcolor: "#17130F",
                color: "#E4D4C0!important",
                px: 4,
                py: 1.8,
                borderRadius: 0,
                fontWeight: 800,
                fontSize: 12,
                "&:hover": {
                  bgcolor: "#2C251E",
                },
              }}
            >
              شروع طراحی اختصاصی
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* TESTIMONIALS */}

      <Box
        sx={{
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 5 }}>
            <Typography
              sx={{
                color: gold,
                fontSize: 11,
                letterSpacing: 2,
                fontWeight: 700,
              }}
            >
              CUSTOMER STORIES
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 27, md: 39 },
                fontWeight: 900,
                mt: 1.5,
              }}
            >
              تجربه‌ای که می‌ماند.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(3, 1fr)",
              },
              gap: 2,
            }}
          >
            {[
              {
                name: "مریم رضایی",
                job: "مشتری NOVA",
                text: "اینکه خودم تونستم رنگ و نوع پارچه مبل رو انتخاب کنم واقعاً تجربه جذابی بود. نتیجه دقیقاً همون چیزی شد که برای خونه‌ام می‌خواستم.",
              },
              {
                name: "علی محمدی",
                job: "مشتری NOVA",
                text: "کیفیت ساخت و توجه به جزئیات برام خیلی مهم بود. مشاوره قبل از سفارش هم کمک کرد انتخاب مطمئن‌تری داشته باشم.",
              },
              {
                name: "نگار احمدی",
                job: "مشتری NOVA",
                text: "به نظرم امکان شخصی‌سازی قبل از خرید عالیه. آدم می‌تونه قبل از سفارش، انتخاب‌های مختلفش رو بررسی کنه.",
              },
            ].map((review) => (
              <Box
                key={review.name}
                sx={{
                  bgcolor: "#141414",
                  border: "1px solid rgba(255,255,255,0.07)",
                  p: 3.5,
                }}
              >
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 0.3,
                  }}
                >
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarRounded
                      key={index}
                      sx={{ color: gold, fontSize: 17 }}
                    />
                  ))}
                </Stack>

                <Typography
                  sx={{
                    fontSize: 13,
                    lineHeight: 2.5,
                    color: "#BEB8AF",
                    mt: 2.5,
                    minHeight: 105,
                  }}
                >
                  «{review.text}»
                </Typography>

                <Divider
                  sx={{
                    borderColor: "rgba(255,255,255,0.1)",
                    my: 2,
                  }}
                />

                <Typography sx={{ fontSize: 13, fontWeight: 800 }}>
                  {review.name}
                </Typography>

                <Typography
                  sx={{
                    fontSize: 10,
                    color: muted,
                    mt: 0.5,
                  }}
                >
                  {review.job}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* FAQ */}

      <Box
        id="faq"
        sx={{
          py: { xs: 8, md: 11 },
          bgcolor: "#111",
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center", mb: 5 }}>
            <Typography
              sx={{
                color: gold,
                fontSize: 11,
                letterSpacing: 2,
                fontWeight: 700,
              }}
            >
              FAQ
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 27, md: 38 },
                fontWeight: 900,
                mt: 1.5,
              }}
            >
              سؤالی دارید؟
            </Typography>
          </Box>

          {faqs.map((faq, index) => (
            <Accordion
              key={faq.question}
              expanded={openFaq === index}
              onChange={(_, expanded) =>
                setOpenFaq(expanded ? index : -1)
              }
              disableGutters
              sx={{
                bgcolor: "transparent",
                color: cream,
                boxShadow: "none",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                "&:before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <KeyboardArrowDownRounded sx={{ color: gold }} />
                }
                sx={{
                  px: 1,
                  py: 1.5,
                  "& .MuiAccordionSummary-content": {
                    my: 1,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails sx={{ px: 1, pb: 3 }}>
                <Typography
                  sx={{
                    color: muted,
                    fontSize: 12,
                    lineHeight: 2.5,
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>

      {/* FOOTER */}

      <Box
        component="footer"
        sx={{
          bgcolor: "#080808",
          pt: 7,
          pb: 3,
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1.5fr 1fr 1fr",
              },
              gap: 5,
              pb: 6,
            }}
          >
            {/* Footer Brand */}

            <Box>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 1.2,
                }}
              >
                <Box
                  sx={{
                    width: 39,
                    height: 39,
                    border: `1px solid ${gold}`,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    color: gold,
                    fontSize: 20,
                    fontFamily: "serif",
                  }}
                >
                  N
                </Box>

                <Typography
                  sx={{
                    fontSize: 24,
                    letterSpacing: 3,
                    fontWeight: 900,
                  }}
                >
                  NOVA
                </Typography>
              </Stack>

              <Typography
                sx={{
                  mt: 2.5,
                  color: muted,
                  fontSize: 12,
                  lineHeight: 2.5,
                  maxWidth: 330,
                }}
              >
                ما اینجا هستیم تا مبلمان را از یک انتخاب ساده به تجربه‌ای
                شخصی تبدیل کنیم. طراحی کن، انتخاب کن و فضای زندگی‌ات را
                متفاوت بساز.
              </Typography>

              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 1,
                  mt: 2.5,
                }}
              >
                <IconButton
                  component="a"
                  href="#home"
                  aria-label="Instagram"
                  sx={{
                    width: 40,
                    height: 40,
                    color: cream,
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: 0,
                    "&:hover": {
                      color: gold,
                      borderColor: gold,
                    },
                  }}
                >
                  <Instagram fontSize="small" />
                </IconButton>

                <IconButton
                  component="a"
                  href="#home"
                  aria-label="Pinterest"
                  sx={{
                    width: 40,
                    height: 40,
                    color: cream,
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: 0,
                    "&:hover": {
                      color: gold,
                      borderColor: gold,
                    },
                  }}
                >
                  <AutoAwesomeRounded fontSize="small" />
                </IconButton>
              </Stack>
            </Box>

            {/* Quick Links */}

            <Box>
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 800,
                  mb: 2.5,
                }}
              >
                دسترسی سریع
              </Typography>

              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                {navItems.map((item) => (
                  <Typography
                    key={item.href}
                    component="a"
                    href={item.href}
                    sx={{
                      fontSize: 12,
                      color: muted,
                      transition: "0.2s",
                      "&:hover": {
                        color: gold,
                      },
                    }}
                  >
                    {item.label}
                  </Typography>
                ))}
              </Stack>
            </Box>

            {/* Contact */}

            <Box>
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 800,
                  mb: 2.5,
                }}
              >
                ارتباط با ما
              </Typography>

              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Typography sx={{ color: muted, fontSize: 12 }}>
                  تلفن: ۰۲۱-۱۲۳۴۵۶۷۸
                </Typography>

                <Typography sx={{ color: muted, fontSize: 12 }}>
                  ایمیل: info@nova.com
                </Typography>

                <Typography sx={{ color: muted, fontSize: 12 }}>
                  تهران، خیابان ...، پلاک ...
                </Typography>
              </Stack>

              <Button
                component="a"
                href="tel:02112345678"
                endIcon={<ArrowOutwardRounded />}
                sx={{
                  color: gold,
                  border: `1px solid ${gold}`,
                  borderRadius: 0,
                  mt: 3,
                  px: 2.5,
                  fontSize: 11,
                }}
              >
                تماس با کارشناسان
              </Button>
            </Box>
          </Box>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

          <Stack
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1.5,
              pt: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: 10,
                color: "#777",
              }}
            >
              © ۲۰۲۶ NOVA Furniture. تمامی حقوق محفوظ است.
            </Typography>

            <Typography
              sx={{
                fontSize: 10,
                color: "#777",
              }}
            >
              MADE WITH PASSION.
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}