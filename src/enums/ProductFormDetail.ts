
// https://ns.editeur.org/onix/en/175 
export enum ProductFormDetail {
  A101 = 'A101', // CD standard audio format
  A102 = 'A102', // SACD super audio format
  A103 = 'A103', // MP3 format
  A104 = 'A104', // WAV format
  A105 = 'A105', // Real Audio format
  A106 = 'A106', // WMA
  A107 = 'A107', // AAC
  A108 = 'A108', // Ogg/Vorbis
  A109 = 'A109', // Audible
  A110 = 'A110', // FLAC
  A111 = 'A111', // AIFF
  A112 = 'A112', // ALAC
  A113 = 'A113', // W3C Audiobook format
  A201 = 'A201', // DAISY 2: full audio with title only (no navigation)
  A202 = 'A202', // DAISY 2: full audio with navigation (no text)
  A203 = 'A203', // DAISY 2: full audio with navigation and partial text
  A204 = 'A204', // DAISY 2: full audio with navigation and full text
  A205 = 'A205', // DAISY 2: full text with navigation and partial audio
  A206 = 'A206', // DAISY 2: full text with navigation and no audio
  A207 = 'A207', // DAISY 3: full audio with title only (no navigation)
  A208 = 'A208', // DAISY 3: full audio with navigation (no text)
  A209 = 'A209', // DAISY 3: full audio with navigation and partial text
  A210 = 'A210', // DAISY 3: full audio with navigation and full text
  A211 = 'A211', // DAISY 3: full text with navigation and partial audio
  A212 = 'A212', // DAISY 3: full text with navigation and no audio
  A301 = 'A301', // Standalone audio
  A302 = 'A302', // Readalong audio
  A303 = 'A303', // Playalong audio
  A304 = 'A304', // Speakalong audio
  A305 = 'A305', // Synchronised audio
  A310 = 'A310', // Sound effects
  A311 = 'A311', // Background music
  A312 = 'A312', // Without background sounds
  A400 = 'A400', // 64kbits/s
  A401 = 'A401', // 128kbits/s
  A402 = 'A402', // 192kbits/s
  A403 = 'A403', // 256kbits/s
  A404 = 'A404', // 320kbits/s
  A410 = 'A410', // Mono
  A420 = 'A420', // Stereo
  A421 = 'A421', // Stereo 2.1
  A441 = 'A441', // Surround 4.1
  A451 = 'A451', // Surround 5.1
  A471 = 'A471', // Dolby Atmos
  B101 = 'B101', // Mass market (rack) paperback
  B102 = 'B102', // Trade paperback (US)
  B103 = 'B103', // Digest format paperback
  B104 = 'B104', // A-format paperback
  B105 = 'B105', // B-format paperback
  B106 = 'B106', // Trade paperback (UK)
  B107 = 'B107', // Tall rack paperback (US)
  B108 = 'B108', // A5 size Tankobon
  B109 = 'B109', // JIS B5 size Tankobon
  B110 = 'B110', // JIS B6 size Tankobon
  B111 = 'B111', // A6 size Bunko
  B112 = 'B112', // B40-dori Shinsho
  B113 = 'B113', // Pocket (Sweden, Norway, France)
  B114 = 'B114', // Storpocket (Sweden)
  B115 = 'B115', // Kartonnage (Sweden)
  B116 = 'B116', // Flexband (Sweden)
  B117 = 'B117', // Mook / Bookazine
  B118 = 'B118', // Dwarsligger
  B119 = 'B119', // 46 size
  B120 = 'B120', // 46-Henkei size
  B121 = 'B121', // A4
  B122 = 'B122', // A4-Henkei size
  B123 = 'B123', // A5-Henkei size
  B124 = 'B124', // B5-Henkei size
  B125 = 'B125', // B6-Henkei size
  B126 = 'B126', // AB size
  B127 = 'B127', // JIS B7 size
  B128 = 'B128', // Kiku size
  B129 = 'B129', // Kiku-Henkei size
  B130 = 'B130', // JIS B4 size
  B131 = 'B131', // Paperback (DE)
  B132 = 'B132', // Libro de bolsillo
  B133 = 'B133', // Pocket-sized
  B134 = 'B134', // A5
  B135 = 'B135', // Mass market max paperback
  B139 = 'B139', // Comic book size (US)
  B140 = 'B140', // Comic album size (Euro)
  B141 = 'B141', // B4-Henkei size
  B201 = 'B201', // Coloring / join-the-dot book
  B202 = 'B202', // Lift-the-flap book
  B204 = 'B204', // Miniature book
  B205 = 'B205', // Moving picture / flicker book
  B206 = 'B206', // Pop-up book
  B207 = 'B207', // Scented / ‘smelly’ book
  B208 = 'B208', // Sound story / ‘noisy’ book
  B209 = 'B209', // Sticker book
  B210 = 'B210', // Touch-and-feel book
  B212 = 'B212', // Die-cut book
  B213 = 'B213', // Book-as-toy
  B214 = 'B214', // Soft-to-touch book
  B215 = 'B215', // Fuzzy-felt book
  B216 = 'B216', // Press-out puzzle pieces
  B221 = 'B221', // Picture book
  B222 = 'B222', // ‘Carousel’ book
  B223 = 'B223', // Pull-the-tab book
  B224 = 'B224', // ‘Wordless’ book
  B301 = 'B301', // Loose leaf or partwork – sheets / parts and binder / wallet
  B302 = 'B302', // Loose leaf or partwork – binder / wallet only
  B303 = 'B303', // Loose leaf or partwork – sheets / parts only
  B304 = 'B304', // Sewn
  B305 = 'B305', // Unsewn / adhesive bound
  B306 = 'B306', // Library binding
  B307 = 'B307', // Reinforced binding
  B308 = 'B308', // Half bound
  B309 = 'B309', // Quarter bound
  B310 = 'B310', // Saddle-sewn
  B311 = 'B311', // Comb bound
  B312 = 'B312', // Wire-O
  B313 = 'B313', // Concealed wire
  B314 = 'B314', // Coiled wire bound
  B315 = 'B315', // Trade binding
  B316 = 'B316', // Swiss binding
  B317 = 'B317', // Notched binding
  B318 = 'B318', // Lay-flat binding
  B400 = 'B400', // Self-covered
  B401 = 'B401', // Cloth over boards
  B402 = 'B402', // Paper over boards
  B403 = 'B403', // Leather, real
  B404 = 'B404', // Leather, imitation
  B405 = 'B405', // Leather, bonded
  B406 = 'B406', // Vellum
  B407 = 'B407', // Head and tail bands
  B408 = 'B408', // Decorated endpapers
  B409 = 'B409', // Cloth
  B410 = 'B410', // Imitation cloth
  B411 = 'B411', // Velvet
  B412 = 'B412', // Flexible plastic / vinyl cover
  B413 = 'B413', // Plastic-covered
  B414 = 'B414', // Vinyl-covered
  B415 = 'B415', // Laminated cover
  B416 = 'B416', // Card cover
  B417 = 'B417', // Duplex-printed cover
  B420 = 'B420', // Delicate cover / jacket finish
  B501 = 'B501', // With dust jacket
  B502 = 'B502', // With printed dust jacket
  B503 = 'B503', // With translucent dust cover
  B504 = 'B504', // With flaps
  B505 = 'B505', // With thumb index
  B506 = 'B506', // With ribbon marker(s)
  B507 = 'B507', // With zip fastener
  B508 = 'B508', // With button snap fastener
  B509 = 'B509', // With leather edge lining
  B510 = 'B510', // Rough front
  B511 = 'B511', // Foldout
  B512 = 'B512', // Wide margin
  B513 = 'B513', // With fastening strap
  B514 = 'B514', // With perforated pages
  B515 = 'B515', // Acid-free paper
  B516 = 'B516', // Archival paper
  B517 = 'B517', // With elasticated strap
  B518 = 'B518', // With serialized authenticity token
  B519 = 'B519', // With dust jacket poster
  B520 = 'B520', // Rounded corners
  B521 = 'B521', // Splashproof
  B522 = 'B522', // Mineral paper
  B601 = 'B601', // Turn-around book
  B602 = 'B602', // Unflipped manga format
  B603 = 'B603', // Back-to-back book
  B604 = 'B604', // Flipped manga format
  B605 = 'B605', // Variant turn-around book
  B606 = 'B606', // Page progression LTR
  B607 = 'B607', // Page progression RTL
  B608 = 'B608', // Page progression TTB
  B609 = 'B609', // Page progression other
  B610 = 'B610', // Syllabification
  B611 = 'B611', // Upper case only
  B701 = 'B701', // UK Uncontracted Braille
  B702 = 'B702', // UK Contracted Braille
  B703 = 'B703', // US Braille
  B704 = 'B704', // US Uncontracted Braille
  B705 = 'B705', // US Contracted Braille
  B706 = 'B706', // Unified English Braille
  B707 = 'B707', // Moon
  B708 = 'B708', // Unified English Uncontracted Braille
  B709 = 'B709', // Unified English Contracted Braille
  B750 = 'B750', // Tactile images
  B751 = 'B751', // Lenticular images
  B752 = 'B752', // Anaglyph images
  C750 = 'C750', // Raised 3D relief
  D101 = 'D101', // Real Video format
  D102 = 'D102', // Quicktime format
  D103 = 'D103', // AVI format
  D104 = 'D104', // Windows Media Video format
  D105 = 'D105', // MPEG-4
  D201 = 'D201', // MS-DOS
  D202 = 'D202', // Windows
  D203 = 'D203', // Macintosh
  D204 = 'D204', // UNIX / LINUX
  D205 = 'D205', // Other operating system(s)
  D206 = 'D206', // Palm OS
  D207 = 'D207', // Windows Mobile
  D301 = 'D301', // Microsoft XBox
  D302 = 'D302', // Nintendo Gameboy Color
  D303 = 'D303', // Nintendo Gameboy Advanced
  D304 = 'D304', // Nintendo Gameboy
  D305 = 'D305', // Nintendo Gamecube
  D306 = 'D306', // Nintendo 64
  D307 = 'D307', // Sega Dreamcast
  D308 = 'D308', // Sega Genesis/Megadrive
  D309 = 'D309', // Sega Saturn
  D310 = 'D310', // Sony PlayStation 1
  D311 = 'D311', // Sony PlayStation 2
  D312 = 'D312', // Nintendo Dual Screen
  D313 = 'D313', // Sony PlayStation 3
  D314 = 'D314', // Microsoft Xbox 360
  D315 = 'D315', // Nintendo Wii
  D316 = 'D316', // Sony PlayStation Portable (PSP)
  D317 = 'D317', // Sony PlayStation 3
  D318 = 'D318', // Sony PlayStation 4
  D319 = 'D319', // Sony PlayStation Vita
  D320 = 'D320', // Microsoft Xbox One
  D321 = 'D321', // Nintendo Switch
  D322 = 'D322', // Nintendo Wii U
  D323 = 'D323', // Sony PlayStation 5
  D324 = 'D324', // Microsoft Xbox Series X / S
  E100 = 'E100', // Other
  E101 = 'E101', // EPUB
  E102 = 'E102', // OEB
  E103 = 'E103', // DOC
  E104 = 'E104', // DOCX
  E105 = 'E105', // HTML
  E106 = 'E106', // ODF
  E107 = 'E107', // PDF
  E108 = 'E108', // PDF/A
  E109 = 'E109', // RTF
  E110 = 'E110', // SGML
  E111 = 'E111', // TCR
  E112 = 'E112', // TXT
  E113 = 'E113', // XHTML
  E114 = 'E114', // zTXT
  E115 = 'E115', // XPS
  E116 = 'E116', // Amazon Kindle
  E117 = 'E117', // BBeB
  E118 = 'E118', // DXReader
  E119 = 'E119', // EBL
  E120 = 'E120', // Ebrary
  E121 = 'E121', // eReader
  E122 = 'E122', // Exebook
  E123 = 'E123', // Franklin eBookman
  E124 = 'E124', // Gemstar Rocketbook
  E125 = 'E125', // iSilo
  E126 = 'E126', // Microsoft Reader
  E127 = 'E127', // Mobipocket
  E128 = 'E128', // MyiLibrary
  E129 = 'E129', // NetLibrary
  E130 = 'E130', // Plucker
  E131 = 'E131', // VitalBook
  E132 = 'E132', // Vook
  E133 = 'E133', // Google Edition
  E134 = 'E134', // Book ‘app’ for iOS
  E135 = 'E135', // Book ‘app’ for Android
  E136 = 'E136', // Book ‘app’ for other operating system
  E139 = 'E139', // CEB
  E140 = 'E140', // CEBX
  E141 = 'E141', // iBook
  E142 = 'E142', // ePIB
  E143 = 'E143', // SCORM
  E144 = 'E144', // EBP
  E145 = 'E145', // Page Perfect
  E146 = 'E146', // BRF
  E147 = 'E147', // Erudit
  E148 = 'E148', // Amazon Kindle Print Replica
  E149 = 'E149', // Comic Book Archive
  E200 = 'E200', // Reflowable
  E201 = 'E201', // Fixed format
  E202 = 'E202', // Readable offline
  E203 = 'E203', // Requires network connection
  E204 = 'E204', // Content removed
  E205 = 'E205', // Visible page numbering
  E206 = 'E206', // No preferred page progression
  E210 = 'E210', // Landscape
  E211 = 'E211', // Portrait
  E212 = 'E212', // Square
  E213 = 'E213', // Vertical scrolling
  E221 = 'E221', // 5:4
  E222 = 'E222', // 4:3
  E223 = 'E223', // 3:2
  E224 = 'E224', // 16:10
  E225 = 'E225', // 16:9
  E226 = 'E226', // 18:9
  E227 = 'E227', // 21:9
  L101 = 'L101', // Laminated
  P091 = 'P091', // Calendar with write-in space
  P092 = 'P092', // Calendar without write-in space
  P096 = 'P096', // Multiple months per page
  P097 = 'P097', // One month per page
  P098 = 'P098', // One week per page
  P099 = 'P099', // One day per page
  P101 = 'P101', // Desk calendar or diary
  P102 = 'P102', // Mini calendar or pocket diary
  P103 = 'P103', // Engagement calendar or Appointment diary
  P104 = 'P104', // Day by day calendar
  P105 = 'P105', // Poster calendar
  P106 = 'P106', // Wall calendar
  P107 = 'P107', // Perpetual calendar or diary
  P108 = 'P108', // Advent calendar
  P109 = 'P109', // Bookmark calendar
  P110 = 'P110', // Student or Academic calendar or diary
  P111 = 'P111', // Project calendar
  P112 = 'P112', // Almanac calendar
  P113 = 'P113', // Other calendar, diary or organiser
  P114 = 'P114', // Other calendar or organiser product
  P115 = 'P115', // Family planner
  P116 = 'P116', // Postcard calendar
  P131 = 'P131', // Blank calendar
  P132 = 'P132', // Panoramic calendar
  P133 = 'P133', // Columnar calendar
  P134 = 'P134', // Square calendar
  P120 = 'P120', // Picture story cards
  P121 = 'P121', // Flash cards
  P122 = 'P122', // Reference cards
  P123 = 'P123', // Recreation cards
  P124 = 'P124', // Postcards
  P125 = 'P125', // Greeting cards
  P126 = 'P126', // Gift cards
  P127 = 'P127', // Certificate cards
  P201 = 'P201', // Hardback (stationery)
  P202 = 'P202', // Paperback / softback (stationery)
  P203 = 'P203', // Spiral bound (stationery)
  P204 = 'P204', // Leather / fine binding (stationery)
  P301 = 'P301', // With hanging strips
  P305 = 'P305', // Single-sided
  P306 = 'P306', // Double-sided
  V201 = 'V201', // PAL
  V202 = 'V202', // NTSC
  V203 = 'V203', // SECAM
  V205 = 'V205', // HD
  V206 = 'V206', // UHD
  V207 = 'V207', // 3D video
  V210 = 'V210', // Closed captions
  V211 = 'V211', // Open captions
  V220 = 'V220', // Home use
  V221 = 'V221', // Classroom use
  Z101 = 'Z101', // Wooden
  Z102 = 'Z102', // Plastic
  Z103 = 'Z103', // Board
  Z111 = 'Z111', // 3D puzzle
  Z112 = 'Z112', // Noisy kit / puzzle / toy
  Z113 = 'Z113', // Puppet
  Z121 = 'Z121', // Extra large pieces
}