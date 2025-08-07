# SuperCompras Promotion Discount

This is a simple Java program that calculates and displays the discount applied based on the purchase amount at the "SuperCompras" department store.

## Description

The store offers a special promotion where customers receive different discounts depending on the total amount of their purchase:

- Purchases **less than 50.00 BRL** receive **0% discount**.
- Purchases **between 50.00 BRL and 100.00 BRL (inclusive)** receive **10% discount**.
- Purchases **greater than 100.00 BRL** receive **20% discount**.

The program reads a purchase amount as a string with two decimal places, evaluates the discount according to the rules, and prints out the discount percentage.

## How to Run

1. Compile the Java file:

   ```bash
   javac PromocaoRelampago.java

2. Run the program:

   ```bash
   javac PromocaoRelampago

3. Input the purchase amount (e.g., `75.00`), then press Enter.
   
4. The program will output the discount applied, e.g.:

   ```matlab
   Desconto de 10%


## Example

|Input|Output|
|-----|------|
|49.99|Desconto de 0%|
|75.00|Desconto de 10%|
|150.00|Desconto de 20%|

## Code Structure
- `main` method: Reads the input and prints the discount result.
- `calcularDesconto(String valorCompra)`: Determines the descount percentage based on the purchase value.

## Requiremnts
- Java 8 or higher
- No external libraries needed.
