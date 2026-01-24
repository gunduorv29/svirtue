# Navigation Fix Plan

## Issue Analysis
- app/_layout.tsx only defines "index" and "cart" screens in Stack navigation
- Missing screens: home, shop, articles
- index screen is empty, causing app to default to cart screen

## Plan
1. Update app/_layout.tsx to include all screens in Stack navigation
2. Implement proper index screen as main entry point
3. Ensure proper navigation flow between screens

## Implementation Steps
- [x] Add home, shop, articles screens to Stack navigation
- [x] Create proper index screen with navigation to main sections
- [ ] Test navigation flow
