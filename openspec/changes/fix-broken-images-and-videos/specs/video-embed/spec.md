## ADDED Requirements

### Requirement: Home page SHALL display a Vimeo profile video
The Home page (`Index.tsx`) SHALL embed a Vimeo video (`video/1174755421`) in the hero section, matching the currently deployed site behavior.

#### Scenario: Vimeo video renders on Home page
- **WHEN** a user visits the Home page (`/`)
- **THEN** a Vimeo iframe SHALL be visible in the hero section with autoplay, muted, looped, and no controls (matching deployed config: `autoplay=1&muted=1&controls=0&loop=1&title=0&byline=0&portrait=0`)

#### Scenario: Video does not block page interaction
- **WHEN** the Vimeo video is loading or fails to load
- **THEN** the page SHALL remain fully functional and navigable (video failure SHALL NOT break layout)

### Requirement: projects.ts SHALL NOT contain placeholder video URLs
All `videoUrls` entries in `projects.ts` SHALL be valid, real video URLs. Placeholder or test URLs (e.g., YouTube `dQw4w9WgXcQ`) SHALL be removed or replaced with actual content URLs.

#### Scenario: Placeholder YouTube URLs are cleaned up
- **WHEN** `projects.ts` contains `https://www.youtube.com/embed/dQw4w9WgXcQ`
- **THEN** those entries SHALL be removed from the `videoUrls` array (unless the owner provides replacement URLs)

#### Scenario: Valid Vimeo URLs are preserved
- **WHEN** `projects.ts` contains Vimeo URLs (e.g., `https://player.vimeo.com/video/1174450985`)
- **THEN** those URLs SHALL remain unchanged

### Requirement: Video iframes SHALL use proper embed attributes
All video iframes SHALL include proper security and UX attributes for embedding.

#### Scenario: Vimeo embed on Home page has correct attributes
- **WHEN** the Vimeo iframe is rendered on the Home page
- **THEN** it SHALL include `allow="autoplay"` and `allowFullScreen` attributes, and SHALL NOT trigger browser console warnings about conflicting attributes
