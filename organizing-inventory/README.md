# Organizing Inventory - Department Store Manager Challenge

This Java program helps a department store manager organize and summarize inventory data from multiple store branches. Each branch is identified by a unique code, and the program calculates the total number of products available per store.

## 🧾 Problem Description

You're the new manager of a department store chain and need to organize the product inventory. Each store has a unique code, and you must calculate the total number of products available in each one.

### ✅ Input

A string containing store codes and product quantities, separated by commas. Each store and quantity is represented in the format:

```
storeCode:quantity
```

Example:

```
LOJA1:10,LOJA2:5,LOJA1:3
```

### 🧾 Output

A string showing each store code and the total quantity of products available, in the format:

```
storeCode:total
```

Stores must appear in the same order as their **first appearance** in the input.

Example Output:

```
LOJA1:13,LOJA2:5
```

---

## 💻 How to Run

1. Compile the Java file:

   ```bash
   javac OrganizandoEstoque.java
   ```

2. Run the program:

   ```bash
   java OrganizandoEstoque
   ```

3. Input the string containing store codes and quantities.

4. The program will output the total quantity per store.

---

## 📊 Examples

| Input                                | Output                     |
|-------------------------------------|----------------------------|
| LOJA1:10,LOJA2:5,LOJA1:3            | LOJA1:13,LOJA2:5           |
| LOJA3:20,LOJA3:15,LOJA4:7           | LOJA3:35,LOJA4:7           |
| LOJA5:8,LOJA6:12,LOJA5:4            | LOJA5:12,LOJA6:12          |

---

## 📁 Code Structure

- `main`: Reads user input and prints the result.
- `organizarEstoque(String entrada)`: Parses the input and computes the totals using a `LinkedHashMap` to preserve insertion order.

---

## 🛠 Requirements

- Java 8 or higher
- No external libraries needed
