## ADDED Requirements

### Requirement: Image filenames SHALL NOT contain spaces
All image files in `public/` SHALL use hyphens (`-`) instead of spaces in filenames. This ensures compatibility with URL encoding across all hosting platforms.

#### Scenario: Existing files with spaces are renamed
- **WHEN** the migration script runs against `public/`
- **THEN** all files with spaces in their names SHALL have spaces replaced with hyphens (e.g., `ES 2_1.png` → `ES-2_1.png`, `Carnival Video 1 still cut.jpg` → `Carnival-Video-1-still-cut.jpg`)

#### Scenario: projects.ts references match renamed files
- **WHEN** files in `public/` are renamed
- **THEN** all corresponding paths in `src/data/projects.ts` (thumbnail, images, videoUrls referencing local files) SHALL be updated to match the new filenames exactly (case-sensitive)

#### Scenario: Renamed images load on deployed site
- **WHEN** the site is deployed after renaming
- **THEN** all image requests SHALL return HTTP 200 (not 404)

### Requirement: Image files SHALL be valid and non-corrupt
Every image file referenced in `projects.ts` SHALL be a valid image file (minimum 1KB, correct file header for its extension).

#### Scenario: Corrupted file detected and handled
- **WHEN** `HS Art & Media_Student_Work_Sample_8.jpg` (2 bytes, corrupted) is found
- **THEN** its reference SHALL be removed from `projects.ts` OR replaced with a valid image file

### Requirement: Image path references SHALL be accurate
Every path in `projects.ts` SHALL correspond to an actual file in `public/` with exact filename match (no duplicated prefixes, no typos).

#### Scenario: Duplicated prefix in path is corrected
- **WHEN** a path contains a duplicated prefix (e.g., `HS Art & Media_HS Art & Media_Student_Work_Sample_8.jpg`)
- **THEN** it SHALL be corrected to the single-prefix form (e.g., `HS-Art-&-Media_Student_Work_Sample_8.jpg`) matching the actual file

### Requirement: Ampersand characters in filenames SHALL be preserved
Files containing `&` in their names (e.g., `HS Art & Media_...`) SHALL keep the `&` character during the space→hyphen migration. Only spaces are replaced.

#### Scenario: Ampersand preserved during rename
- **WHEN** `HS Art & Media_Student_Work_Sample_2.JPG` is renamed
- **THEN** the result SHALL be `HS-Art-&-Media_Student_Work_Sample_2.JPG` (ampersand kept, spaces replaced)
