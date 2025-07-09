# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a 1990s-style recreation of the Bespoke Vehicle Maintenance website, designed to authentically replicate the aesthetic and functionality of websites created with Microsoft FrontPage 98. The site serves as a nostalgic homage to early web design while maintaining the actual business content of a modern automotive service company.

## Architecture & Standards

### HTML Standards Compliance
- **HTML 4.0 Transitional DOCTYPE** - Required for Windows 98/IE4/Netscape 4 compatibility
- **Table-based layout** - No CSS grid, flexbox, or modern layout methods
- **Inline styling only** - Uses `<FONT>` tags, HTML attributes (BGCOLOR, ALIGN, etc.) instead of CSS
- **Case sensitivity** - All HTML tags in UPPERCASE (HTML, HEAD, BODY, TABLE, etc.) to match FrontPage output
- **Character encoding** - ISO-8859-1 charset for period authenticity

### Browser Compatibility Requirements
- Must function in Internet Explorer 5.0 (Windows 95/98) through modern browsers
- JavaScript limited to IE5-compatible syntax using `document.all` detection
- Cross-browser XMLHttpRequest with ActiveXObject fallback for IE5
- CSS animations with JavaScript fallback for older browsers
- Uses `<MARQUEE>` and `<BLINK>` tags for animations (audio removed for compatibility)
- Proper HTML 4.0 Transitional DOCTYPE with DTD reference

### Content Structure
- **index.html** - Main homepage with complete business information, working visitor counter, photo gallery
- **privacy-policy.html** - Legal page with comprehensive GDPR compliance (11 sections)
- **terms-of-service.html** - Service terms with Consumer Rights Act 2015 compliance (14 sections)
- **netlify/functions/counter.mjs** - Modern ES module serverless visitor counter with JSON storage and CORS
- **assets/** - Processed terrible quality images for authentic 90s appearance

### Styling Conventions
- **FrontPage-specific attributes** - BORDERCOLORLIGHT, BORDERCOLORDARK, BGPROPERTIES
- **Generator meta tag** - Must include `<META NAME="GENERATOR" CONTENT="Microsoft FrontPage 4.0">`
- **Tab indentation** - Consistent with FrontPage's auto-generated formatting
- **Color palette** - Authentic 90s web-safe colors (#008080, #FF4500, #FFFF00, etc.)
- **90s badges** - "Made with FrontPage", "Netscape Compatible", "Bookmark this site", etc.
- **Text effects** - Heavy use of FONT tags, multiple sizes/colors, blinking emphasis

## Development Guidelines

### Visitor Counter
- **Netlify Functions** - Use serverless functions for working visitor counter (counter.mjs)
- **Cross-browser compatibility** - XMLHttpRequest with ActiveXObject fallback for IE5-6
- **File storage** - Counter data stored in /tmp/visitor_count.json with CORS headers
- **Modern format** - ES module using export default with Request/Response objects
- **Fallback behavior** - Local increment if AJAX fails, ensuring counter always works

### Image Processing
- **Terrible quality** - Process images with heavy compression (quality 15-25)
- **Wrong aspect ratios** - Distort dimensions for authentic 90s look
- **macOS sips command** - Use `sips -z height width --setProperty formatOptions quality`
- **ISO-8859-1 encoding** - Replace "•" bullets with "-" to avoid character corruption

### Content Accuracy
- All business information must match the modern BVM website exactly
- Use current dates (2019 founding, 2025 copyright) despite 90s aesthetic
- Contact details, services, and FAQ content must be word-for-word accurate
- No fictional statistics or counters unless they can be made functional
- Avoid non-functional forms (guestbooks, newsletters) to maintain business credibility

### Animation Standards
- **Marquee effects** - Use BEHAVIOR, DIRECTION, SCROLLAMOUNT attributes
- **JavaScript animations** - IE5 compatible using setTimeout() and document.all
- **Visual effects** - Combine `<BLINK>` with `<MARQUEE>` for maximum 90s impact
- **CSS animations** - Use @keyframes for cross-browser blinking (modern browsers ignore <BLINK>)
- **Audio removed** - No sound effects to ensure maximum browser compatibility
- **WordArt effects** - CSS text-shadow for 3D text appearance with period-appropriate styling
- **IE5 fallback** - JavaScript visibility toggling for browsers without CSS animation support

### File Operations
- Test websites by opening HTML files directly in browser
- Use `open index.html` command for local testing
- Maintain ISO-8859-1 encoding for character compatibility
- Keep file sizes reasonable for dial-up era authenticity

### Code Structure
- Nested table layouts for all positioning
- DIV elements for centering and proper HTML structure (no tables inside P tags)
- All text formatting via FONT tags with SIZE, COLOR, FACE attributes
- JavaScript wrapped in HTML comments for older browser compatibility
- Clean HTML structure without unclosed tags or audio elements

### Technical Implementation Notes
- **Visitor counter**: Fully functional with real-time incrementation via Netlify Functions
- **Cross-browser support**: Tested and working from IE5 through modern browsers
- **Error handling**: Graceful fallbacks ensure functionality even if external services fail
- **HTML validation**: Clean structure without deprecated audio elements that caused parsing issues
- **Character encoding**: Maintained ISO-8859-1 for period authenticity
- **Performance**: Optimized for both dial-up era constraints and modern speed expectations

This codebase prioritizes historical accuracy and nostalgic authenticity over modern web standards while ensuring the business content remains current, professional, and fully functional across all browser environments.