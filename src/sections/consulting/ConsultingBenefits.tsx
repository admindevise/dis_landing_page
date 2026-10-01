import { Box, Container, Typography, Grid } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { TrendingUp, Shield, Zap, Target, Brain, Rocket } from 'lucide-react';
import { CONSULTING_BENEFITS } from '../../constants/consulting';

const benefitIcons = {
  brain: Brain,
  zap: Zap,
  target: Target,
  trendingUp: TrendingUp,
  shield: Shield,
  rocket: Rocket,
};

const ConsultingBenefits = () => {

  return (
    <Box
      sx={(theme) => ({
        py: 12,
        position: 'relative',
        background: theme.palette.background.default,
        overflow: 'hidden',
      })}
    >
      {/* Elementos decorativos */}
      <Box
        sx={(theme) => ({
          position: 'absolute',
          top: '10%',
          right: '-10%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.08)} 0%, transparent 70%)`,
          filter: 'blur(80px)',
        })}
      />
      <Box
        sx={(theme) => ({
          position: 'absolute',
          bottom: '10%',
          left: '-10%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.info.light, 0.06)} 0%, transparent 70%)`,
          filter: 'blur(80px)',
        })}
      />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            sx={(theme) => ({
              color: theme.palette.info.light,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontSize: 12,
              mb: 2,
            })}
          >
            // RESULTADOS TANGIBLES
          </Typography>

          <Typography
            variant="h3"
            sx={(theme) => ({
              fontWeight: 800,
              mb: 2,
              background: `linear-gradient(90deg, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            })}
          >
            ¿Por qué transformar con IA?
          </Typography>

          <Typography
            variant="body1"
            sx={(theme) => ({
              color: theme.palette.text.secondary,
              maxWidth: 700,
              mx: 'auto',
              fontSize: '1.05rem',
              lineHeight: 1.7,
            })}
          >
            La inteligencia artificial no es una tendencia tecnológica más: es una ventaja competitiva crítica que redefine cómo operan los negocios líderes.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {CONSULTING_BENEFITS.map((benefit, index) => {
            const Icon = benefitIcons[benefit.icon];

            return (
            <Grid size={{xs:12, md:6, lg:4}} key={index}>
              <Box
                sx={(theme) => ({
                  height: '100%',
                  p: 4,
                  borderRadius: 3,
                  background: theme.palette.background.paper,
                  border: `1px solid ${alpha(theme.palette.text.secondary, 0.2)}`,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',

                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: benefit.gradient,
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  },

                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 20px 40px ${alpha(theme.palette.primary.main, 0.2)}`,
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.4)}`,

                    '&::before': {
                      transform: 'scaleX(1)',
                    },

                    '& .benefit-icon': {
                      transform: 'scale(1.1) rotate(5deg)',
                      background: benefit.gradient,
                      color: theme.palette.common.white,
                    },
                  },
                })}
              >
                <Box
                  className="benefit-icon"
                  sx={(theme) => ({
                    width: 60,
                    height: 60,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                    background: alpha(theme.palette.primary.main, 0.1),
                    color: theme.palette.primary.main,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  })}
                >
                  <Icon size={32} />
                </Box>

                <Typography
                  variant="h6"
                  sx={(theme) => ({
                    fontWeight: 700,
                    mb: 2,
                    color: theme.palette.text.primary,
                    fontSize: '1.1rem',
                  })}
                >
                  {benefit.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={(theme) => ({
                    color: theme.palette.text.secondary,
                    lineHeight: 1.8,
                    fontSize: '0.95rem',
                  })}
                >
                  {benefit.description}
                </Typography>
              </Box>
            </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default ConsultingBenefits;
