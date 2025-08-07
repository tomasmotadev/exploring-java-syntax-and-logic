import java.math.BigDecimal;
import java.util.Scanner;

public class PromocaoRelampago {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String valorCompra = scanner.nextLine();
        System.out.println(calcularDesconto(valorCompra));
        scanner.close();
    }

    public static String calcularDesconto(String valorCompra) {
        BigDecimal valor = new BigDecimal(valorCompra);
        BigDecimal cinquenta = new BigDecimal("50.00");
        BigDecimal cem = new BigDecimal("100.00");
        BigDecimal descontoPercentual;
       
        // Verifique se o valor é menor que 50.00:
        if (valor.compareTo(cinquenta) < 0) {
            descontoPercentual = BigDecimal.ZERO;
        }
        // Verifique se o valor é entre 50.00 e 100.00 (inclusive):
        else if (valor.compareTo(cinquenta) >= 0 && valor.compareTo(cem) <= 0) {
            descontoPercentual = new BigDecimal("10");
        }
        // Caso contrário, o valor é maior que 100.00:
        else {
            descontoPercentual = new BigDecimal("20");
        }
        
        // Retorne a string formatada com o desconto aplicado, conforme exigido no desafio:
        return "Desconto de " + descontoPercentual.intValue() + "%";
    }
}
