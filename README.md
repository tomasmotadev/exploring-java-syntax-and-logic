# Exploring Java Syntax and Logic

This repository contains two Java programs designed to assist in managing a department store more efficiently. Each challenge focuses on a specific area: promotions and inventory management.

---

## 🛍️ Challenge 1: SuperCompras Promotion Discount

This Java program calculates and displays the discount applied based on the purchase amount at the "SuperCompras" department store.

### 📋 Problem Description

Depending on the total value of the purchase, customers receive different discounts:

- Purchases **less than 50.00 BRL** receive **0% discount**.
- Purchases **between 50.00 BRL and 100.00 BRL (inclusive)** receive **10% discount**.
- Purchases **greater than 100.00 BRL** receive **20% discount**.

### ✅ Input

A string representing the purchase amount with two decimal places.

Example:

```
75.00
```

### 🧾 Output

A string indicating the discount percentage:

```
Desconto de 10%
```

### 💻 How to Run

1. Compile the Java file:

   ```bash
   javac PromocaoRelampago.java
   ```

2. Run the program:

   ```bash
   java PromocaoRelampago
   ```

3. Input the purchase amount and receive the discount message.

### 📊 Examples

| Input   | Output             |
|---------|--------------------|
| 49.99   | Desconto de 0%     |
| 75.00   | Desconto de 10%    |
| 150.00  | Desconto de 20%    |

---

## 📦 Challenge 2: Organizing Inventory

This Java program helps organize and summarize inventory data from multiple store branches.

### 📋 Problem Description

Each store has a unique code and a number of products. The goal is to calculate the total number of products available per store, maintaining the order of first appearance.

### ✅ Input

A string with store codes and quantities, separated by commas, in the format:

```
storeCode:quantity
```

Example:

```
LOJA1:10,LOJA2:5,LOJA1:3
```

### 🧾 Output

A string showing total quantities per store:

```
LOJA1:13,LOJA2:5
```

### 💻 How to Run

1. Compile the Java file:

   ```bash
   javac OrganizandoEstoque.java
   ```

2. Run the program:

   ```bash
   java OrganizandoEstoque
   ```

3. Input the inventory string and receive the summarized output.

### 📊 Examples

| Input                                | Output                     |
|-------------------------------------|----------------------------|
| LOJA1:10,LOJA2:5,LOJA1:3            | LOJA1:13,LOJA2:5           |
| LOJA3:20,LOJA3:15,LOJA4:7           | LOJA3:35,LOJA4:7           |
| LOJA5:8,LOJA6:12,LOJA5:4            | LOJA5:12,LOJA6:12          |

---

## 🛠 Requirements

- Java 8 or higher
- No external libraries needed.
