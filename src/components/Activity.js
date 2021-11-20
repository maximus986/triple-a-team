/** @jsx jsx */
import { jsx, Box, Paragraph } from 'theme-ui';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

export const Activity = ({
  activity: {
    activityImage,
    activityDescription: { activityDescription },
    activityCategory,
  },
}) => {
  const image = getImage(activityImage);
  return (
    <Box sx={{ bg: 'primaryBackground' }}>
      <Box
        sx={{
          position: 'relative',
          borderRadius: [0, '16px'],
          overflow: 'hidden',
        }}
      >
        <GatsbyImage image={image} alt={activityImage.title} />
        <Paragraph
          sx={{
            position: 'absolute',
            left: 0,
            bottom: ['10px', '18px'],
            bg: 'primaryOpacity_07',
            p: 3,
            color: 'primaryBackground',
            fontWeight: 'bold',
          }}
        >
          {activityCategory}
        </Paragraph>
      </Box>
      <Paragraph sx={{ p: 4 }}>{activityDescription}</Paragraph>
    </Box>
  );
};
