# Calculator-Tests-WDIO-MahiGaming-Interview

This repository contains the setup and tests for the Calculator app using WebdriverIO (WDIO). The tests are written to ensure the functionality and correctness of the Calculator app.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12.x or later)
- [npm](https://www.npmjs.com/) (version 6.x or later)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/calculator-app-testing.git
   cd calculator-app-testing
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

## Running the Tests

To execute the tests using WebdriverIO, run the following command:

```bash
npm run wdio
```

This command will start the WebdriverIO test runner and execute all the tests defined in the `./test/specs` directory.

## Project Structure

```
calculator-app-testing/
├── .gitignore
├── package.json
├── wdio.conf.js
├── README.md
├── test/
│   ├── specs/
│   │   └── calculator.tests.ts
│   ├── pageobjects/
│   │   └── calculator.page.ts
│   │   └── page.ts
└── ...
```

- **`test/specs/calculator.tests.js`**: Contains the test cases for the Calculator app.
- **`wdio.conf.js`**: Configuration file for WebdriverIO.

## Contributing

Contributions are welcome! If you have any improvements or new tests to add, please fork the repository, create a new branch, and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or inquiries, please contact [your-email@example.com](mailto:your-email@example.com).

---

This README file provides a comprehensive guide for setting up and running WebdriverIO tests for the Calculator app, including installation instructions, running the tests, project structure, and an example test case.
