# Contact Form Documentation

## Overview

The contact form is located at `/contact` and provides a comprehensive inquiry system for potential clients. It features a two-column layout with introductory text on the left and the form on the right.

## Form Structure

### Left Column Content (40% width)
- **Title**: "Start Here"
- **Description**: "Every collaboration begins with a quiet introduction. Tell us your vision, and we'll shape what follows."

### Right Column Form (60% width)

## Form Fields

### 1. Name Field
- **Label**: "How should we address you?"
- **Type**: Text input
- **Required**: No
- **Placeholder**: (under label) "First name, stage name, or preferred name"
- **Field Name**: `name`

### 2. Email Field
- **Label**: "Your email*"
- **Type**: Email input
- **Required**: Yes (marked with red asterisk)
- **Field Name**: `email`
- **Validation**: 
  - Required field check
  - Valid email format check
  - Real-time validation on blur
  - Error message: "Please complete this required field." or "Please enter a valid email address."

### 3. Services Checkboxes
- **Label**: "Which services are you interested in?"
- **Type**: Checkboxes (multiple selection)
- **Required**: No
- **Field Name**: `services`
- **Options**:
  - Photography
  - Website Design
  - SEO Mastery
  - Privacy Audit
  - Not sure yet

### 4. Location Field
- **Label**: "Where are you currently based or traveling?"
- **Type**: Text input
- **Required**: No
- **Field Name**: `location`

### 5. Vision/Support Field
- **Label**: "What kind of shoot or support are you envisioning?"
- **Type**: Textarea
- **Required**: No
- **Placeholder**: (under label) "Just a few words or a vibe."
- **Field Name**: `vision`

### 6. Visual Inspiration Field (Photography-dependent)
- **Label**: "Visual inspiration"
- **Type**: Text input
- **Required**: No
- **Visibility**: Only shown when "Photography" is selected in services
- **Placeholder**: (under label) "Pinterest, outfits, a dream vibe—drop anything you'd like to share"
- **Field Name**: `visual-inspiration`

### 7. Website/Brand Presence Field
- **Label**: "Do you already have a brand or website?"
- **Type**: Dropdown
- **Required**: No
- **Placeholder**: "Select One"
- **Field Name**: `website-presence`
- **Options**:
  - Yes
  - No
  - In progress
  - Not relevant

### 8. Time-Sensitive Field
- **Label**: "Is this inquiry time-sensitive?"
- **Type**: Dropdown
- **Required**: No
- **Placeholder**: "Choose an option"
- **Field Name**: `time-sensitive`
- **Options**:
  - Just exploring
  - Hoping to book soon
  - Urgent / deadline coming up

### 9. Contact Preference Field
- **Label**: "How would you like us to contact you?"
- **Type**: Checkboxes with conditional inputs
- **Required**: No
- **Field Name**: `contact-preference`
- **Options**:
  - Email
  - Encrypted message (Proton, Signal, etc.)
    - Shows additional field when selected
    - Additional field placeholder: "Your ProtonMail address or Signal number"
    - Additional field name: `contact-encrypted-details`
    - Conditionally required when checkbox is selected
  - Other
    - Shows additional field when selected
    - Additional field placeholder: "Tell us what works best for you"
    - Additional field name: `contact-other-details`
    - Conditionally required when checkbox is selected

### 10. Public Profile Field
- **Label**: "Public profile (if you'd like to share)"
- **Type**: Text input
- **Required**: No
- **Placeholder**: (under label) "Twitter, Tryst, website, or anything you feel represents you"
- **Field Name**: `public-profile`

### 11. Face in Frame Field (Photography-dependent)
- **Label**: "Face in Frame?"
- **Type**: Dropdown
- **Required**: No
- **Visibility**: Only shown when "Photography" is selected in services
- **Placeholder**: "Your comfort comes first—how visible would you like to be?"
- **Field Name**: `face-in-frame`
- **Options**:
  - Fully visible
  - Semi-anonymous
  - Anonymous
  - Not sure yet

### 12. Shoot Location Field (Photography-dependent)
- **Label**: "Preferred shoot location"
- **Type**: Dropdown
- **Required**: No
- **Visibility**: Only shown when "Photography" is selected in services
- **Placeholder**: (under label) "Studios, villas, even castles—we've got you."
- **Default option**: "Choose an option"
- **Field Name**: `shoot-location`
- **Options**:
  - Studio (we provide)
  - Your hotel or apartment
  - Outdoor / nature
  - Luxurious location (castle, villa, designer home)
  - Undecided
  - Not relevant

### 13. Availability Field
- **Label**: "What's your availability like?"
- **Type**: Text input
- **Required**: No
- **Placeholder**: (under label) "Next month, weekends only, or a specific date range"
- **Field Name**: `availability`

### 14. How Found Us Field
- **Label**: "How did you find us?"
- **Type**: Dropdown
- **Required**: No
- **Placeholder**: "Choose an option"
- **Field Name**: `how-found`
- **Options**:
  - Instagram
  - Twitter / X
  - Reddit
  - Referral
  - Google
  - Your work found me
  - Other

### 15. Anything Else Field
- **Label**: "Is there anything else you'd like us to know?"
- **Type**: Textarea (50% taller than standard input)
- **Required**: No
- **Field Name**: `anything-else`
- **Features**: Vertically resizable

### 16. Submit Button
- **Text**: "Submit"
- **Type**: Button
- **Action**: Form submission (currently logs data to console, TODO: integrate with web3forms.com)

## Conditional Logic

### Photography Service Selection
When the "Photography" checkbox is selected:
1. "Visual inspiration" text input appears
2. "Face in Frame?" dropdown appears
3. "Preferred shoot location" dropdown appears

When the "Photography" checkbox is deselected:
1. All three fields are hidden
2. Their values are cleared

### Contact Preference Conditional Inputs
- **Encrypted message**: When selected, shows text input for ProtonMail/Signal details
- **Other**: When selected, shows text input for custom contact method
- Both additional inputs are conditionally required when their parent checkbox is selected

## Validation Rules

### Required Fields
- Email (always required)
- Encrypted message details (required when "Encrypted message" is selected)
- Other contact details (required when "Other" is selected)

### Validation Behavior
- Email validation on blur
- Conditional field validation on blur
- Error messages appear below invalid fields
- Invalid fields get red border styling
- Errors clear when user starts typing

## Styling Details

### Form Container
- Background: #f0eee7
- Padding: ~40px 50px
- Border radius: 2rem
- Max width: 560px on desktop

### Input Fields
- Height: ~56px
- Padding: 18px 20px
- Border: 1.5px solid #cccbc8
- Border radius: var(--border-radius)
- Background: #faf9f5
- Hover: border turns #141413, background turns white
- Focus: same as hover with no outline

### Checkboxes
- Size: 20px × 20px
- Border: 1.5px solid #cccbc8
- Checked state: white background with dark center dot

### Dropdowns
- Custom arrow icon
- Default options vary: "Choose an option", "Select One", or placeholder text
- Some dropdowns use the first option as descriptive placeholder (e.g., "Face in Frame?")

### Textareas
- Standard textarea: inherits input styling
- Small textarea: 84px height (50% taller than input)
- Resizable vertically

### Error States
- Red text (#cc7c5e)
- Red border on invalid fields
- Error messages below fields

## JavaScript Functionality

### File: `/src/js/contact-form.js`

Key features:
- Email validation (real-time and on submit)
- Conditional field visibility for Photography services
- Conditional field visibility for contact preferences
- Conditional validation for dependent fields
- Form submission handling (currently console logging)
- Field clearing when parent options are deselected

## Future Integration

The form is prepared for web3forms.com integration (noted in HTML comment). Currently, form submission logs data to console for testing purposes.