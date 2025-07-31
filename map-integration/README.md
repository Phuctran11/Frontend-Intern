# Google Maps Iframe Testing

A comprehensive testing application for Google Maps iframe integration using Next.js 15 and React 19.

## Features

### 🗺️ Main Features
- **Interactive Location Selection**: Choose from predefined Vietnam locations
- **Custom URL Testing**: Test your own Google Maps embed URLs
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Multiple Map Views**: Grid layout showing all locations simultaneously
- **Real-time Configuration**: Adjust iframe settings dynamically

### 🧪 Testing Features  
- **Error Handling**: Test with invalid URLs and empty inputs
- **Responsive Testing**: View maps at different screen sizes
- **Configuration Testing**: Test different iframe attributes
- **Loading States**: Lazy vs eager loading comparison

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   cd map-integration
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
map-integration/
├── app/
│   ├── globals.css          # Global styles with map-specific CSS
│   ├── layout.tsx           # Root layout with navigation
│   ├── page.tsx             # Main testing interface
│   └── testing/
│       └── page.tsx         # Advanced testing page
├── components/
│   └── GoogleMapEmbed.js    # Reusable map component
├── package.json
└── README.md
```

## Component Usage

### GoogleMapEmbed Component

```jsx
import GoogleMapEmbed from '../components/GoogleMapEmbed';

<GoogleMapEmbed
  src="https://www.google.com/maps/embed?pb=..."
  height="400"
  title="My Location"
  allowFullScreen={true}
  loading="lazy"
  className="custom-class"
/>
```

#### Props
- `src` (string, required): Google Maps embed URL
- `height` (string, default: "450"): Height in pixels
- `width` (string, default: "100%"): Width (responsive by default)
- `title` (string, default: "Google Maps"): Iframe title for accessibility
- `allowFullScreen` (boolean, default: true): Enable fullscreen mode
- `loading` (string, default: "lazy"): Loading strategy ("lazy" or "eager")
- `className` (string): Additional CSS classes

## How to Get Google Maps Embed URLs

1. **Visit Google Maps**: Go to [maps.google.com](https://maps.google.com)
2. **Search Location**: Enter the location you want to embed
3. **Click Share**: Click the "Share" button on the location
4. **Select Embed**: Choose "Embed a map" tab
5. **Copy URL**: Copy the iframe src URL (not the full iframe HTML)

### Example URL Format
```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.09!2d105.850!3d21.028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abe454decbb1%3A0xa9e5b80b6740e4c!2zSOG7kyBIb8OgbiBLaeG6v20!5e0!3m2!1sen!2s!4v1703684400000!5m2!1sen!2s
```

## Testing Scenarios

### 1. **Valid URLs** ✅
- Test with proper Google Maps embed URLs
- Verify maps load correctly
- Check responsive behavior

### 2. **Invalid URLs** ❌
- Empty URLs
- Non-Google Maps URLs  
- Malformed URLs
- Test error handling

### 3. **Configuration Testing** ⚙️
- Different heights (200px - 800px)
- Full screen enabled/disabled
- Lazy vs eager loading
- Custom CSS classes

### 4. **Responsive Testing** 📱
- Mobile view (320px)
- Tablet view (768px)  
- Desktop view (1024px+)
- Dynamic resizing

## Predefined Test Locations

The app includes 4 test locations in Vietnam:

1. **Hà Nội - Hồ Hoàn Kiếm** (21.0285°N, 105.8542°E)
2. **TP.HCM - Chợ Bến Thành** (10.7728°N, 106.6998°E)
3. **Đà Nẵng - Cầu Rồng** (16.0619°N, 108.2251°E)
4. **Nha Trang - Bãi biển** (12.2489°N, 109.1968°E)

## Pages

### Main Page (`/`)
- Interactive location selector
- Custom URL input
- Single map view with details
- Multiple maps overview grid

### Testing Page (`/testing`)
- Dynamic configuration panel
- Error handling tests
- Responsive breakpoint testing
- Invalid URL testing

## Styling

The app uses:
- **Tailwind CSS**: For responsive design and utilities
- **Custom CSS**: Map-specific styles in `globals.css`
- **Responsive Design**: Mobile-first approach

## Browser Support

- ✅ Chrome/Chromium (recommended)
- ✅ Firefox
- ✅ Safari  
- ✅ Edge
- ⚠️ Internet Explorer (not supported)

## Troubleshooting

### Common Issues

1. **Maps not loading**
   - Check if URL is valid Google Maps embed URL
   - Verify internet connection
   - Check browser console for errors

2. **CORS errors**
   - Ensure using embed URLs, not regular Google Maps URLs
   - Use proper Google Maps embed format

3. **Responsive issues**
   - Check CSS classes are applied correctly
   - Verify Tailwind CSS is loaded

### Debug Mode

Enable debug logging by opening browser console and checking for:
- Component mount/unmount messages
- URL validation errors
- Loading state changes

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with different URLs and configurations
5. Submit a pull request

## License

This project is for educational and testing purposes.

## Next Steps

- [ ] Add Google Maps API integration
- [ ] Implement custom markers
- [ ] Add geolocation support
- [ ] Create map interaction testing
- [ ] Add performance monitoring
