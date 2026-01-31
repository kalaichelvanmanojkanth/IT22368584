# IT22368584 - Tanglish to Tamil Translation Testing

## Assignment Details
- **Course**: IT3040 - ITPM Semester 1
- **Student ID**: IT22368584
- **Assignment**: Testing Tanglish-to-Tamil translation system
- **Target System**: https://tamil.changathi.com/

## Project Overview
This project contains automated test cases for validating the accuracy and robustness of the Tanglish-to-Tamil translation system. The test suite includes comprehensive coverage of various linguistic scenarios and system behaviors.

### Test Case Distribution
- **24 Positive Test Cases**: Scenarios where the system correctly converts Tanglish to Tamil
- **10 Negative Test Cases**: Scenarios where the system fails or behaves incorrectly
- **1 UI Test Case**: Testing real-time output updating functionality
- **Total**: 35 comprehensive test cases

## Test Coverage Areas

### Functional Coverage
- **Sentence Structures**: Simple, compound, and complex sentences
- **Grammar Forms**: Interrogative questions, imperative commands, tense variations
- **Daily Language Usage**: Realistic conversational inputs, greetings, requests, responses
- **Mixed Content**: Tanglish + English technical terms, brand names, places
- **Input Variations**: Short (≤30), Medium (31-299), Long (≥300) character inputs
- **Special Cases**: Punctuation, numbers, formatting, informal language

### Quality Focus
- **Accuracy Validation**: Testing correct Tanglish-to-Tamil conversions
- **Robustness Validation**: Testing system behavior with problematic inputs
- **Real-time Behavior**: UI responsiveness and automatic output updating

## Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Installation Instructions

1. **Navigate to project directory**:
   ```bash
   cd IT22368584
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Install Playwright browsers**:
   ```bash
   npx playwright install
   ```

## Running the Tests

### Run all test cases:
```bash
npx playwright test
```

### Run with HTML report:
```bash
npx playwright test --reporter=html
```

### Run in headed mode (visible browser):
```bash
npx playwright test --headed
```

### Run specific test file:
```bash
npx playwright test tests/Tanglish-to-Tamil-ass.spec.js
```

## Viewing Test Results

After running tests, view the detailed HTML report:
```bash
npx playwright show-report
```

## Project Structure
```
IT22368584/
├── tests/
│   └── Tanglish-to-Tamil-ass.spec.js    # Main test file with all 35 test cases
├── playwright.config.js                  # Playwright configuration
├── package.json                          # Project dependencies
├── playwright-report/                    # Generated test reports
├── test-results/                         # Test execution results
└── README.md                             # This documentation
```

## Test Implementation Details

### Test Data Structure
- All test cases are defined in a structured `testCases` object
- Each test case includes: ID, name, input, expected output, category, and metadata
- Comprehensive coverage of linguistic patterns and edge cases

### Automation Features
- **Intelligent Typing**: Custom `typeWithConversion` function simulates realistic user input
- **Dynamic Validation**: Smart output comparison with timeout handling
- **Cross-browser Support**: Tests run on Chrome, Firefox, and Safari
- **Detailed Reporting**: Screenshots and execution details for failed tests

### Test Categories
1. **Positive Functional Tests** (Pos_Fun_0001 - Pos_Fun_0024)
2. **Negative Functional Tests** (Neg_Fun_0025 - Neg_Fun_0034) 
3. **UI Tests** (Pos_UI_0035)

## Key Test Scenarios

### Language Structure Testing
- Simple greetings and daily expressions
- Complex sentences with conditionals
- Questions and commands
- Past, present, and future tenses
- Formal and informal language

### Robustness Testing
- Invalid punctuation patterns
- Extremely long inputs
- Mixed random characters
- Empty or malformed inputs
- Special character handling

### Mixed Language Testing
- English technical terms preservation
- Brand names and proper nouns
- Time, date, and currency formats
- Professional and casual contexts

## Assignment Compliance
- ✅ 35 test cases covering all required linguistic areas
- ✅ Playwright automation for all scenarios
- ✅ Proper test case categorization and naming conventions
- ✅ Comprehensive coverage of positive and negative scenarios
- ✅ UI testing for real-time behavior validation

## Technical Notes
- The system performs real-time translation without requiring a submit button
- Tests validate both conversion accuracy and system stability
- English technical terms and proper nouns are appropriately preserved
- All negative test cases are designed to demonstrate system limitations

## Contact Information
- **Student ID**: IT22368584
- **Course**: IT3040 - ITPM Semester 1
- **Target System**: https://tamil.changathi.com/# IT22368584
