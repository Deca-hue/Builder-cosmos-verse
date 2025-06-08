# Google Maps Integration Setup

This project includes a live Google Maps integration showing the cafe location in Nairobi, Kenya.

## Setup Instructions

### 1. Get Google Maps API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Maps JavaScript API**
4. Go to **Credentials** and create a new **API Key**
5. (Optional) Restrict the API key to your domain for security

### 2. Configure Environment Variables

1. Copy `.env.example` to `.env.local`:

   ```bash
   cp .env.example .env.local
   ```

2. Add your Google Maps API key:
   ```
   VITE_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
   ```

### 3. Restart Development Server

```bash
npm run dev
```

## Features

- **Interactive Map**: Pan, zoom, and explore the area around the cafe
- **Custom Marker**: Shows the exact location of The Roasted Bean
- **Fallback Display**: Shows coordinates and instructions when API key is not configured
- **External Link**: Button to open location in Google Maps app
- **Responsive Design**: Works on mobile and desktop

## Location Details

- **Address**: Kimathi Street, Nairobi, Kenya
- **Coordinates**: -1.2876, 36.8237
- **Zoom Level**: 16 (street level detail)

## Customization

You can modify the map settings in `src/components/GoogleMap.tsx`:

- **Location**: Update `cafeLocation` coordinates
- **Zoom Level**: Change `defaultZoom` value
- **Map Style**: Add `mapId` for custom styling
- **Controls**: Modify `disableDefaultUI` and other props

## Troubleshooting

- **Map not loading**: Check that your API key is correct and the Maps JavaScript API is enabled
- **Over quota errors**: Check your API usage in Google Cloud Console
- **CORS errors**: Make sure your domain is allowed in API key restrictions

## Cost Considerations

Google Maps has generous free tiers:

- 28,000 map loads per month free
- $7 per 1,000 additional loads

For a cafe website, you're very unlikely to exceed the free tier.
