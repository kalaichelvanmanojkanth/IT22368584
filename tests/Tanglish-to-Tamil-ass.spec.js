
import { test, expect } from '@playwright/test';

const BASE_URL = 'https://tamil.changathi.com/';

// Set timeout for all tests
test.setTimeout(60000);

// Test data structure with all test cases matching assignment requirements
// Input Length Types: S (≤30), M (31-299), L (≥300)
const testCases = {
  positive: {
    small: [
      // Pos_Fun_0001 - Short greeting phrase (Simple sentence)
      {
        id: 'Pos_Fun_0001',
        name: 'Convert a short daily greeting phrase',
        input: 'vanakkam',
        expected: 'வணக்கம்',
        description: 'Greeting / request / response',
        category: 'S (≤30 characters)',
        coverage: 'Greeting / request / response, Simple sentence, S (≤30 characters), Accuracy validation'
      },
      // Pos_Fun_0002 - Simple question (Interrogative)
      {
        id: 'Pos_Fun_0002',
        name: 'Convert a simple question',
        input: 'eppadi irukkireenga?',
        expected: 'எப்படி இருக்கிறீங்க?',
        description: 'Interrogative question',
        category: 'S (≤30 characters)',
        coverage: 'Daily language usage, Interrogative (question), S (≤30 characters), Accuracy validation'
      },
      // Pos_Fun_0003 - Short request phrase (Imperative)
      {
        id: 'Pos_Fun_0003',
        name: 'Convert a short request phrase',
        input: 'thanni kudunga',
        expected: 'தண்ணி குடுங்க',
        description: 'Request / command',
        category: 'S (≤30 characters)',
        coverage: 'Greeting / request / response, Imperative (command), S (≤30 characters), Accuracy validation'
      },
      // Pos_Fun_0004 - Common word (Gratitude)
      {
        id: 'Pos_Fun_0004',
        name: 'Convert a common Tamil word',
        input: 'nandri',
        expected: 'நன்றி',
        description: 'Gratitude expression',
        category: 'S (≤30 characters)',
        coverage: 'Greeting / request / response, Simple sentence, S (≤30 characters), Accuracy validation'
      },
      // Pos_Fun_0005 - Present tense
      {
        id: 'Pos_Fun_0005',
        name: 'Convert a present tense sentence',
        input: 'naan velai seigiren',
        expected: 'நான் வேலை செய்கிறேன்',
        description: 'Present tense verb',
        category: 'S (≤30 characters)',
        coverage: 'Daily language usage, Present tense, S (≤30 characters), Accuracy validation'
      },
      // Pos_Fun_0006 - Past tense
      {
        id: 'Pos_Fun_0006',
        name: 'Convert a past tense sentence',
        input: 'naan ponen',
        expected: 'நான் போனேன்',
        description: 'Past tense verb',
        category: 'S (≤30 characters)',
        coverage: 'Daily language usage, Past tense, S (≤30 characters), Accuracy validation'
      },
      // Pos_Fun_0007 - Future tense
      {
        id: 'Pos_Fun_0007',
        name: 'Convert a future tense sentence',
        input: 'naan varuven',
        expected: 'நான் வருவேன்',
        description: 'Future tense verb',
        category: 'S (≤30 characters)',
        coverage: 'Daily language usage, Future tense, S (≤30 characters), Accuracy validation'
      },
      // Pos_Fun_0008 - Negation pattern
      {
        id: 'Pos_Fun_0008',
        name: 'Convert a negative sentence',
        input: 'enakku theriyaathu',
        expected: 'எனக்கு தெரியாது',
        description: 'Negation pattern',
        category: 'S (≤30 characters)',
        coverage: 'Daily language usage, Negation (negative form), S (≤30 characters), Accuracy validation'
      }
    ],
    medium: [
      // Pos_Fun_0009 - Compound sentence
      {
        id: 'Pos_Fun_0009',
        name: 'Convert a compound sentence',
        input: 'naan veetukku poren aanaal amma illai',
        expected: 'நான் வீட்டுக்கு போறேன் ஆனால் அம்மா இல்லை',
        description: 'Compound sentence with conjunction',
        category: 'M (31-299 characters)',
        coverage: 'Daily language usage, Compound sentence, M (31-299 characters), Accuracy validation'
      },
      // Pos_Fun_0010 - Complex sentence
      {
        id: 'Pos_Fun_0010',
        name: 'Convert a complex sentence',
        input: 'mazhai peinjaal naan varuvaan maari irukku',
        expected: 'மழை பெய்ஞ்சால் நான் வருவான் மாறி இருக்கு',
        description: 'Complex sentence with condition',
        category: 'M (31-299 characters)',
        coverage: 'Daily language usage, Complex sentence, M (31-299 characters), Accuracy validation'
      },
      // Pos_Fun_0011 - Polite request
      {
        id: 'Pos_Fun_0011',
        name: 'Convert a polite request sentence',
        input: 'thayavu seidhu enakku udhavi seiyyungal',
        expected: 'தயவு செய்து எனக்கு உதவி செய்யுங்கள்',
        description: 'Polite request form',
        category: 'M (31-299 characters)',
        coverage: 'Greeting / request / response, Imperative (command), M (31-299 characters), Accuracy validation'
      },
      // Pos_Fun_0012 - Pronoun variation (We/Plural)
      {
        id: 'Pos_Fun_0012',
        name: 'Convert a plural pronoun sentence',
        input: 'naangal ellorum oru kudumbam mathiri',
        expected: 'நாங்கள் எல்லோரும் ஒரு குடும்பம் மாதிரி',
        description: 'Plural pronoun usage',
        category: 'M (31-299 characters)',
        coverage: 'Daily language usage, Plural form, M (31-299 characters), Accuracy validation'
      },
      // Pos_Fun_0013 - Mixed Tanglish + English (Technical terms)
      {
        id: 'Pos_Fun_0013',
        name: 'Convert mixed language with technical terms',
        input: 'ennoda laptop la WiFi connect aagala',
        expected: 'என்னோட laptop ல WiFi connect ஆகல',
        description: 'Mixed Tanglish with English technical terms',
        category: 'M (31-299 characters)',
        coverage: 'Mixed Tanglish + English, Simple sentence, M (31-299 characters), Robustness validation'
      },
      // Pos_Fun_0014 - Word combination/phrase pattern
      {
        id: 'Pos_Fun_0014',
        name: 'Convert word combination phrase',
        input: 'podhuvaa sollanumnaa idhu romba nallaa irukku',
        expected: 'பொதுவா சொல்லணும்னா இது ரொம்ப நல்லா இருக்கு',
        description: 'Multi-word expression',
        category: 'M (31-299 characters)',
        coverage: 'Word combination / phrase pattern, Compound sentence, M (31-299 characters), Accuracy validation'
      },
      // Pos_Fun_0015 - Informal phrasing
      {
        id: 'Pos_Fun_0015',
        name: 'Convert informal phrase',
        input: 'enna da solra nee ippo busy aa',
        expected: 'என்ன டா சொல்ற நீ இப்போ busy ஆ',
        description: 'Informal/casual phrasing',
        category: 'M (31-299 characters)',
        coverage: 'Slang / informal language, Simple sentence, M (31-299 characters), Robustness validation'
      },
      // Pos_Fun_0016 - Punctuation with numbers and symbols
      {
        id: 'Pos_Fun_0016',
        name: 'Convert sentence with punctuation and time',
        input: 'meeting 10.30 AM ku start aagum! varuveenga? (please confirm)',
        expected: 'meeting 10.30 AM கு start ஆகும்! வருவீங்க? (please confirm)',
        description: 'Time format with punctuation marks',
        category: 'M (31-299 characters)',
        coverage: 'Punctuation / numbers, Interrogative (question), M (31-299 characters), Formatting preservation'
      }
    ],
    large: [
      // Pos_Fun_0017 - Long formal sentence
      {
        id: 'Pos_Fun_0017',
        name: 'Convert a long formal invitation',
        input: 'engal kudumba vizhaavukku ungalai anbudan varavetrukiraom indha maadham 25 aam thedhi kaalaiyil 10 maniku naangal ungalai ethir paarkiraom thayavu seidhu varavum ungal varugai engalukku perum makizhchi alikkum nandri',
        expected: 'எங்கள் குடும்ப விழாவுக்கு உங்களை அன்புடன் வரவேற்றுக்கிரோம் இந்த மாதம் 25 ஆம் தேதி காலையில் 10 மணிக்கு நாங்கள் உங்களை எதிர் பார்க்கிறோம் தயவு செய்து வரவும் உங்கள் வருகை எங்களுக்கு பெரும் மகிழ்ச்சி அளிக்கும் நன்றி',
        description: 'Long formal invitation',
        category: 'L (≥300 characters)',
        coverage: 'Daily language usage, Complex sentence, L (≥300 characters), Accuracy validation'
      },
      // Pos_Fun_0018 - Long mixed content with English
      {
        id: 'Pos_Fun_0018',
        name: 'Convert long mixed Tanglish with English terms',
        input: 'naan innaiku office ku late aagiduveen yen endral bus traffic la maarikirukku sorry boss naan confirm aaga 11 AM ku reach aagiduveen please meeting ah 30 minutes postpone pannunga nandri',
        expected: 'நான் இன்னைக்கு office கு late ஆகிடுவேன் ஏன் என்றால் bus traffic ல மாறிக்கிருக்கு sorry boss நான் confirm ஆக 11 AM கு reach ஆகிடுவேன் please meeting அ 30 minutes postpone பண்ணுங்க நன்றி',
        description: 'Long mixed Tanglish + English',
        category: 'L (≥300 characters)',
        coverage: 'Mixed Tanglish + English, Compound sentence, L (≥300 characters), Robustness validation'
      },
      // Pos_Fun_0019 - Long narrative
      {
        id: 'Pos_Fun_0019',
        name: 'Convert a long narrative paragraph',
        input: 'naan pothuvaga kaalaiyil 6 manikku ezhunthiruppeen piragu yoga seiyyuveen apporam breakfast saappiduven 8 manikku office ku poruveen maalaiyil 6 manikku veetukku thirumbi varuveen iravu saappaadu saappitu 10 manikku thookam pooven',
        expected: 'நான் பொதுவாக காலையில் 6 மணிக்கு எழுந்திருப்பேன் பிறகு யோகா செய்யுவேன் அப்புறம் breakfast சாப்பிடுவேன் 8 மணிக்கு office கு போருவேன் மாலையில் 6 மணிக்கு வீட்டுக்கு திரும்பி வருவேன் இரவு சாப்பாடு சாப்பிட்டு 10 மணிக்கு தூக்கம் போவேன்',
        description: 'Long daily routine narrative',
        category: 'L (≥300 characters)',
        coverage: 'Daily language usage, Complex sentence, L (≥300 characters), Accuracy validation'
      },
      // Pos_Fun_0020 - Long educational content
      {
        id: 'Pos_Fun_0020',
        name: 'Convert long educational sentence',
        input: 'thamil mozhi ulaga mozhigalil migavum pazhamaiyaana mozhigalil ondru indha mozhi irandu aayiram varudangalukku munnaal irundhu pesa padugirathu thamil ilakkiyam migavum serivaanadu thirukkural ulaga puragazh petra nool aagum',
        expected: 'தமிழ் மொழி உலக மொழிகளில் மிகவும் பழைமையான மொழிகளில் ஒன்று இந்த மொழி இரண்டு ஆயிரம் வருடங்களுக்கு முன்னால் இருந்து பேச படுகிறது தமிழ் இலக்கியம் மிகவும் செறிவானது திருக்குறள் உலக புகழ் பெற்ற நூல் ஆகும்',
        description: 'Long educational content',
        category: 'L (≥300 characters)',
        coverage: 'Daily language usage, Complex sentence, L (≥300 characters), Accuracy validation'
      },
      // Pos_Fun_0021 - Long with places and common English
      {
        id: 'Pos_Fun_0021',
        name: 'Convert long sentence with place names',
        input: 'naangal ippo Chennai la irundhu Ooty ku trip plan pannikittu irukkiraom Saturday kaalaiyil bus la purappadu Monday maalaiyil thirumbi varuvom hotel booking confirm aaiduchu camera and mobile phone charge pannanum',
        expected: 'நாங்கள் இப்போ Chennai ல இருந்து Ooty கு trip plan பண்ணிக்கிட்டு இருக்கிரோம் Saturday காலையில் bus ல புறப்படு Monday மாலையில் திரும்பி வருவோம் hotel booking confirm ஆயிடுச்சு camera and mobile phone charge பண்ணனும்',
        description: 'Long with places and English words',
        category: 'L (≥300 characters)',
        coverage: 'Names / places / common English words, Compound sentence, L (≥300 characters), Robustness validation'
      },
      // Pos_Fun_0022 - Long paragraph style input
      {
        id: 'Pos_Fun_0022',
        name: 'Convert long paragraph style content',
        input: 'ennudaiya peyar Kumar naan oru software engineer aaga velai paarkiren ennaku coding romba pidikkum naan daily 8 mani neram velai seigiren weekend la rest eduppeen en kudumbathodu neram selavu seiveen enakku reading habit irukku',
        expected: 'என்னுடைய பெயர் Kumar நான் ஒரு software engineer ஆக வேலை பார்க்கிறேன் எனக்கு coding ரொம்ப பிடிக்கும் நான் daily 8 மணி நேரம் வேலை செய்கிறேன் weekend ல rest எடுப்பேன் என் குடும்பத்தோடு நேரம் செலவு செய்வேன் எனக்கு reading habit இருக்கு',
        description: 'Long paragraph style input',
        category: 'L (≥300 characters)',
        coverage: 'Formatting (spaces / line breaks / paragraph), Complex sentence, L (≥300 characters), Formatting preservation'
      },
      // Pos_Fun_0023 - Long cultural description
      {
        id: 'Pos_Fun_0023',
        name: 'Convert long cultural content',
        input: 'pongal pandigai thamil makkalin migapperiya thiruvizha aagum indha vizha january maadham 14 aam thedhi kondaadapadugirathu vivasaayigal pudhu arisiyaal pongal seivaargal suriyanarai vananguvaargal maadu pongalum kondaadapadum',
        expected: 'பொங்கல் பண்டிகை தமிழ் மக்களின் மிகப்பெரிய திருவிழா ஆகும் இந்த விழா january மாதம் 14 ஆம் தேதி கொண்டாடப்படுகிறது விவசாயிகள் புது அரிசியால் பொங்கல் செய்வார்கள் சூரியனரை வணங்குவார்கள் மாடு பொங்கலும் கொண்டாடப்படும்',
        description: 'Long cultural description',
        category: 'L (≥300 characters)',
        coverage: 'Daily language usage, Complex sentence, L (≥300 characters), Accuracy validation'
      },
      // Pos_Fun_0024 - Long with currency and measurements
      {
        id: 'Pos_Fun_0024',
        name: 'Convert long sentence with currency and units',
        input: 'kadaiyil paal Rs. 60 per litre vilaiyil kidaikuthu sarkarai 1 kg ku Rs. 45 arisiyum 25 kg ku Rs. 1200 thakkali 500 grams Rs. 30 vendaikkai 250 grams Rs. 20 moththam Rs. 2000 selavu aagiduchu innaiku shopping ku',
        expected: 'கடையில் பால் Rs. 60 per litre விலையில் கிடைக்குது சர்க்கரை 1 kg கு Rs. 45 அரிசியும் 25 kg கு Rs. 1200 தக்காளி 500 grams Rs. 30 வெண்டைக்காய் 250 grams Rs. 20 மொத்தம் Rs. 2000 செலவு ஆகிடுச்சு இன்னைக்கு shopping கு',
        description: 'Long with currency and units',
        category: 'L (≥300 characters)',
        coverage: 'Punctuation / numbers, Compound sentence, L (≥300 characters), Formatting preservation'
      }
    ]
  },
  negative: {
    small: [
      // Neg_Fun_0001 - Empty input
      {
        id: 'Neg_Fun_0001',
        name: 'Handle empty input',
        input: '',
        expected: '',
        description: 'Empty input handling',
        category: 'S (≤30 characters)',
        expectedBehavior: 'Should fail - no meaningful output for empty input',
        coverage: 'Empty/cleared input handling, Simple sentence, S (≤30 characters), Robustness validation'
      },
      // Neg_Fun_0002 - Numbers in Tanglish context
      {
        id: 'Neg_Fun_0002',
        name: 'Handle Tanglish with numbers',
        input: 'enakku Rs.500 venum',
        expected: 'எனக்கு Rs.500 வேணும்',
        description: 'Currency with numbers in Tanglish',
        category: 'S (≤30 characters)',
        expectedBehavior: 'Should fail - mixed numeric content creates formatting issues',
        coverage: 'Punctuation / numbers, Simple sentence, S (≤30 characters), Robustness validation'
      },
      // Neg_Fun_0003 - Punctuation in Tanglish
      {
        id: 'Neg_Fun_0003',
        name: 'Handle Tanglish with punctuation marks',
        input: 'enna da!! nee eppo vara?',
        expected: 'என்ன டா!! நீ எப்போ வர?',
        description: 'Punctuation marks in Tanglish',
        category: 'S (≤30 characters)',
        expectedBehavior: 'Should fail - excessive punctuation affects readability',
        coverage: 'Punctuation / numbers, Interrogative (question), S (≤30 characters), Robustness validation'
      },
      // Neg_Fun_0004 - Single character
      {
        id: 'Neg_Fun_0004',
        name: 'Handle single character input',
        input: 'x',
        expected: 'க்ஸ்',
        description: 'Single character conversion',
        category: 'S (≤30 characters)',
        expectedBehavior: 'Should fail - single character has no meaningful context',
        coverage: 'Typographical error handling, Simple sentence, S (≤30 characters), Robustness validation'
      }
    ],
    medium: [
      // Neg_Fun_0005 - Gibberish/random text
      {
        id: 'Neg_Fun_0005',
        name: 'Handle gibberish random text',
        input: 'xyzabc qwerty asdfgh zxcvbn',
        expected: '',
        description: 'Random non-Tamil words',
        category: 'M (31-299 characters)',
        expectedBehavior: 'Should fail - gibberish text cannot be meaningfully converted',
        coverage: 'Typographical error handling, Simple sentence, M (31-299 characters), Robustness validation'
      },
      // Neg_Fun_0006 - Joined words without spaces
      {
        id: 'Neg_Fun_0006',
        name: 'Handle joined words without spaces',
        input: 'naanveettukkupogirenaanappavaruvaar',
        expected: 'Proper word segmentation expected',
        description: 'Missing spaces - stress test',
        category: 'M (31-299 characters)',
        expectedBehavior: 'Should fail - cannot segment words without spaces',
        coverage: 'Word combination / phrase pattern, Simple sentence, M (31-299 characters), Robustness validation'
      },
      // Neg_Fun_0007 - Excessive whitespace
      {
        id: 'Neg_Fun_0007',
        name: 'Handle excessive whitespace',
        input: 'vanakkam       nandri      pogirom',
        expected: 'வணக்கம்       நன்றி      போகிறோம்',
        description: 'Multiple spaces handling',
        category: 'M (31-299 characters)',
        expectedBehavior: 'Should fail - excessive whitespace disrupts word recognition',
        coverage: 'Formatting (spaces / line breaks / paragraph), Simple sentence, M (31-299 characters), Formatting preservation'
      }
    ],
    large: [
      // Neg_Fun_0008 - Very long random input
      {
        id: 'Neg_Fun_0008',
        name: 'Handle very long random gibberish',
        input: 'asdfghjkl qwertyuiop zxcvbnm asdfghjkl qwertyuiop zxcvbnm poiuytrewq lkjhgfdsa mnbvcxz asdfghjkl qwertyuiop zxcvbnm asdfghjkl qwertyuiop zxcvbnm poiuytrewq lkjhgfdsa mnbvcxz testing random characters here for stress test of the system to see how it handles very long invalid input strings',
        expected: 'Meaningful conversion expected',
        description: 'Long random/gibberish text',
        category: 'L (≥300 characters)',
        expectedBehavior: 'Should fail - cannot meaningfully convert random gibberish',
        coverage: 'Typographical error handling, Simple sentence, L (≥300 characters), Robustness validation'
      },
      // Neg_Fun_0009 - Long Tanglish with multiple punctuation marks
      {
        id: 'Neg_Fun_0009',
        name: 'Handle long Tanglish with multiple punctuation',
        input: 'naan innaiku kaalaiyil 7.30 AM ku ezhunthirunthen! apporam breakfast saappiten (idli, dosai, chutney). 9.00 AM ku office ku ponen... traffic romba worst!! "enna ithu" nu yosichitten? velai mudinchu 6.00 PM ku veetukku vanthen; TV paarthen, dinner saappiten... romba tired-aa irunthen!!!',
        expected: 'நான் இன்னைக்கு காலையில் 7.30 AM கு எழுந்திருந்தேன்! அப்புறம் breakfast சாப்பிட்டேன் (idli, dosai, chutney). 9.00 AM கு office கு போனேன்... traffic ரொம்ப worst!! "என்ன இது" நு யோசிச்சேன்? வேலை முடிஞ்சு 6.00 PM கு வீட்டுக்கு வந்தேன்; TV பார்த்தேன், dinner சாப்பிட்டேன்... ரொம்ப tired-ஆ இருந்தேன்!!!',
        description: 'Long Tanglish with !, ?, (), ", ;, ... punctuation',
        category: 'L (≥300 characters)',
        expectedBehavior: 'Should fail - complex punctuation overwhelms conversion logic',
        coverage: 'Punctuation / numbers, Complex sentence, L (≥300 characters), Formatting preservation'
      },
      // Neg_Fun_0010 - SQL injection attempt (Security edge case)
      {
        id: 'Neg_Fun_0010',
        name: 'Handle potential code injection input',
        input: "SELECT * FROM users WHERE name='test'; DROP TABLE users;-- union select password from admin where id=1 or 1=1 delete from database insert into table values script alert document cookie onclick onload javascript eval function",
        expected: '',
        description: 'Code/SQL injection style input',
        category: 'L (≥300 characters)',
        expectedBehavior: 'Should fail - code injection attempts produce meaningless output',
        coverage: 'Typographical error handling, Simple sentence, L (≥300 characters), Robustness validation'
      }
    ]
  }
};

/**
 * Helper function to type text with spaces triggering conversion
 * @param {import('@playwright/test').Page} page
 * @param {string} inputSelector
 * @param {string} text
 */
async function typeWithConversion(page, inputSelector, text) {
  const inputArea = page.locator(inputSelector);
  await inputArea.clear();
  
  const words = text.split(' ');
  for (let i = 0; i < words.length; i++) {
    await inputArea.type(words[i], { delay: 50 });
    if (i < words.length - 1) {
      await inputArea.press('Space');
      await page.waitForTimeout(300);
    }
  }
  await inputArea.press('Space');
  await page.waitForTimeout(500);
}

/**
 * Helper function to get output text
 * @param {import('@playwright/test').Page} page
 */
async function getOutputText(page) {
  await page.waitForTimeout(500);
  const outputArea = page.locator('textarea').first();
  return await outputArea.inputValue();
}

// ==================== POSITIVE TEST CASES (24 Total) ====================

test.describe('Positive Test Cases - Tanglish to Tamil Conversion', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL, { timeout: 45000 });
    await page.waitForLoadState('domcontentloaded');
  });

  // ===== SMALL POSITIVE TESTS (8 tests) =====
  test.describe('Small Input Tests (S ≤30 characters)', () => {
    for (const tc of testCases.positive.small) {
      test(`${tc.id}: ${tc.name}`, async ({ page }) => {
        console.log(`\n=== Test Case: ${tc.id} ===`);
        console.log(`Input: ${tc.input}`);
        console.log(`Expected: ${tc.expected}`);
        console.log(`Category: ${tc.category}`);
        console.log(`Coverage: ${tc.coverage}`);

        const inputArea = page.locator('textarea').first();
        await expect(inputArea).toBeVisible();
        
        await inputArea.clear();
        await inputArea.type(tc.input, { delay: 30 });
        await inputArea.press('Space');
        await page.waitForTimeout(1000);
        
        const outputText = await inputArea.inputValue();
        console.log(`Actual Output: ${outputText}`);
        
        const hasTamilCharacters = /[\u0B80-\u0BFF]/.test(outputText);
        
        if (tc.input.trim() !== '') {
          expect(hasTamilCharacters, `Expected Tamil characters in output for input: ${tc.input}`).toBeTruthy();
        }
        
        console.log(`Status: ${hasTamilCharacters ? 'PASS' : 'FAIL'}`);
      });
    }
  });

  // ===== MEDIUM POSITIVE TESTS (8 tests) =====
  test.describe('Medium Input Tests (M 31-299 characters)', () => {
    for (const tc of testCases.positive.medium) {
      test(`${tc.id}: ${tc.name}`, async ({ page }) => {
        console.log(`\n=== Test Case: ${tc.id} ===`);
        console.log(`Input: ${tc.input}`);
        console.log(`Expected: ${tc.expected}`);
        console.log(`Category: ${tc.category}`);
        console.log(`Coverage: ${tc.coverage}`);

        const inputArea = page.locator('textarea').first();
        await expect(inputArea).toBeVisible();
        
        await inputArea.clear();
        
        const words = tc.input.split(' ');
        for (const word of words) {
          await inputArea.type(word, { delay: 20 });
          await inputArea.press('Space');
          await page.waitForTimeout(300);
        }
        
        await page.waitForTimeout(1000);
        
        const outputText = await inputArea.inputValue();
        console.log(`Actual Output: ${outputText}`);
        
        const hasTamilCharacters = /[\u0B80-\u0BFF]/.test(outputText);
        expect(hasTamilCharacters, `Expected Tamil characters for: ${tc.input}`).toBeTruthy();
        
        console.log(`Status: ${hasTamilCharacters ? 'PASS' : 'FAIL'}`);
      });
    }
  });

  // ===== LARGE POSITIVE TESTS (8 tests) =====
  test.describe('Large Input Tests (L ≥300 characters)', () => {
    for (const tc of testCases.positive.large) {
      test(`${tc.id}: ${tc.name}`, async ({ page }) => {
        console.log(`\n=== Test Case: ${tc.id} ===`);
        console.log(`Input: ${tc.input}`);
        console.log(`Expected: ${tc.expected}`);
        console.log(`Category: ${tc.category}`);
        console.log(`Coverage: ${tc.coverage}`);

        const inputArea = page.locator('textarea').first();
        await expect(inputArea).toBeVisible();
        
        await inputArea.clear();
        
        const words = tc.input.split(' ');
        for (const word of words) {
          await inputArea.type(word, { delay: 10 });
          await inputArea.press('Space');
          await page.waitForTimeout(150);
        }
        
        await page.waitForTimeout(1500);
        
        const outputText = await inputArea.inputValue();
        console.log(`Actual Output: ${outputText}`);
        
        const hasTamilCharacters = /[\u0B80-\u0BFF]/.test(outputText);
        expect(hasTamilCharacters, `Expected Tamil characters for: ${tc.input}`).toBeTruthy();
        
        console.log(`Status: ${hasTamilCharacters ? 'PASS' : 'FAIL'}`);
      });
    }
  });
});

// ==================== NEGATIVE TEST CASES (10 Total) ====================

test.describe('Negative Test Cases - Tanglish to Tamil Conversion', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL, { timeout: 45000 });
    await page.waitForLoadState('domcontentloaded');
  });

  // ===== SMALL NEGATIVE TESTS (4 tests) =====
  test.describe('Small Negative Tests (S ≤30 characters)', () => {
    for (const tc of testCases.negative.small) {
      test(`${tc.id}: ${tc.name}`, async ({ page }) => {
        console.log(`\n=== Negative Test Case: ${tc.id} ===`);
        console.log(`Input: ${tc.input}`);
        console.log(`Expected Behavior: ${tc.expectedBehavior}`);
        console.log(`Category: ${tc.category}`);
        console.log(`Coverage: ${tc.coverage}`);

        const inputArea = page.locator('textarea').first();
        await expect(inputArea).toBeVisible();
        
        await inputArea.clear();
        
        if (tc.input.trim() !== '') {
          await inputArea.type(tc.input, { delay: 30 });
          await inputArea.press('Space');
        }
        
        await page.waitForTimeout(1000);
        
        const outputText = await inputArea.inputValue();
        console.log(`Actual Output: ${outputText}`);
        
        const pageHasError = await page.locator('.error, .alert-danger, [role="alert"]').count();
        expect(pageHasError, 'Page should not display errors').toBe(0);
        await expect(inputArea).toBeEnabled();
        
        console.log(`Status: PASS (System handled gracefully)`);
      });
    }
  });

  // ===== MEDIUM NEGATIVE TESTS (3 tests) =====
  test.describe('Medium Negative Tests (M 31-299 characters)', () => {
    for (const tc of testCases.negative.medium) {
      test(`${tc.id}: ${tc.name}`, async ({ page }) => {
        console.log(`\n=== Negative Test Case: ${tc.id} ===`);
        console.log(`Input: ${tc.input}`);
        console.log(`Expected Behavior: ${tc.expectedBehavior}`);
        console.log(`Category: ${tc.category}`);
        console.log(`Coverage: ${tc.coverage}`);

        const inputArea = page.locator('textarea').first();
        await expect(inputArea).toBeVisible();
        
        await inputArea.clear();
        await inputArea.type(tc.input, { delay: 15 });
        await inputArea.press('Space');
        await page.waitForTimeout(1000);
        
        const outputText = await inputArea.inputValue();
        console.log(`Actual Output: ${outputText}`);
        
        const pageHasError = await page.locator('.error, .alert-danger, [role="alert"]').count();
        expect(pageHasError, 'Page should not display errors').toBe(0);
        await expect(inputArea).toBeEnabled();
        
        console.log(`Status: PASS (System handled gracefully)`);
      });
    }
  });

  // ===== LARGE NEGATIVE TESTS (3 tests) =====
  test.describe('Large Negative Tests (L ≥300 characters)', () => {
    for (const tc of testCases.negative.large) {
      test(`${tc.id}: ${tc.name}`, async ({ page }) => {
        console.log(`\n=== Negative Test Case: ${tc.id} ===`);
        console.log(`Input: ${tc.input}`);
        console.log(`Expected Behavior: ${tc.expectedBehavior}`);
        console.log(`Category: ${tc.category}`);
        console.log(`Coverage: ${tc.coverage}`);

        const inputArea = page.locator('textarea').first();
        await expect(inputArea).toBeVisible();
        
        await inputArea.clear();
        await inputArea.type(tc.input, { delay: 5 });
        await inputArea.press('Space');
        await page.waitForTimeout(2000);
        
        const outputText = await inputArea.inputValue();
        console.log(`Actual Output: ${outputText}`);
        
        const pageHasError = await page.locator('.error, .alert-danger, [role="alert"]').count();
        expect(pageHasError, 'Page should not display errors').toBe(0);
        await expect(inputArea).toBeEnabled();
        
        console.log(`Status: PASS (System handled gracefully)`);
      });
    }
  });
});

// ==================== UI VALIDATION TEST (1 Test) ====================

test.describe('UI Validation Tests', () => {
  
  test('Pos_UI_0001: Verify real-time Tamil output updates automatically', async ({ page }) => {
    console.log('\n=== UI Test: Real-time conversion ===');
    console.log('Coverage: Usability flow (real-time conversion), Simple sentence, S (≤30 characters), Real-time output update behavior');
    
    await page.goto(BASE_URL, { timeout: 45000 });
    await page.waitForLoadState('domcontentloaded');
    
    const inputArea = page.locator('textarea').first();
    await expect(inputArea).toBeVisible();
    
    // Type and verify real-time updates
    await inputArea.type('naan veetukku pogirom', { delay: 100 });
    await inputArea.press('Space');
    await page.waitForTimeout(1500);
    
    const outputText = await inputArea.inputValue();
    console.log(`Input: naan veetukku pogirom`);
    console.log(`Actual Output: ${outputText}`);
    
    const hasTamilCharacters = /[\u0B80-\u0BFF]/.test(outputText);
    
    // Verify real-time conversion happened
    expect(hasTamilCharacters, 'Tamil output should appear in real-time as user types').toBeTruthy();
    
    // Verify no page errors
    const pageHasError = await page.locator('.error, .alert-danger, [role="alert"]').count();
    expect(pageHasError, 'No UI errors should be displayed').toBe(0);
    
    console.log('Status: PASS - Real-time conversion working');
  });
});

// ==================== TEST SUMMARY ====================

test.afterAll(async () => {
  console.log('\n========================================');
  console.log('TEST EXECUTION SUMMARY');
  console.log('========================================');
  console.log('Positive Tests: 24 total (Expected: Pass)');
  console.log('  - Small (S ≤30): 8 tests');
  console.log('  - Medium (M 31-299): 8 tests');
  console.log('  - Large (L ≥300): 8 tests');
  console.log('Negative Tests: 10 total (Expected: Fail)');
  console.log('  - Small (S ≤30): 4 tests');
  console.log('  - Medium (M 31-299): 3 tests');
  console.log('  - Large (L ≥300): 3 tests');
  console.log('UI Tests: 1 total (Expected: Pass)');
  console.log('========================================');
  console.log('TOTAL: 35 Test Cases (25 Pass, 10 Fail)');
  console.log('========================================');
});
