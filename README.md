# Fractions calculator

Node.js command-line program that take operations on fractions as an input and produce a fractional result.

## Features
- It's able to add, substract, multiply and divide fractions.
- Improper fractions and whole numbers are also allowed as operands.

## Installation

Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install this program.

```bash
npm install
```

## Command Run

```bash
node app.js [fraction] [operator] [fraction]
```

## Notes
- Command line shell interpret * as all files of the path. For multiply, please use quotation for that argument. e.g. "*"
- Improper fractions and whole numbers are also allowed as operands
- Mixed numbers will be represented by whole_numerator/denominator. e.g. "3_1/4"

## Examples

```bash
node app.js 2_3/8 + 9/8
node app.js 1/2 "*" 3_3/4 
node app.js 2/5 - 1/3 
```

## Tests

```bash
npx jest
```

## Credits

Development by [@jhonmer-araujo](https://github.com/jhonmer-araujo)


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[ISC](https://choosealicense.com/licenses/isc/)
