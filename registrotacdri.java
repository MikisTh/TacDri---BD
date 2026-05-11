import java.util.ArrayList;
import java.util.List;

class Nutrientes {
    double carboidratos; // g
    double proteinas;    // g
    double gorduras;     // g
    double fibras;       // g

    double sodio;        // mg
    double calcio;       // mg
    double ferro;        // mg

    public Nutrientes(double carboidratos, double proteinas,
                       double gorduras, double fibras,
                       double sodio, double calcio, double ferro) {

        this.carboidratos = carboidratos;
        this.proteinas = proteinas;
        this.gorduras = gorduras;
        this.fibras = fibras;

        this.sodio = sodio;
        this.calcio = calcio;
        this.ferro = ferro;
    }

    // kcal dos macronutrientes
    public double calcularKcal() {
        return (carboidratos * 4)
             + (proteinas * 4)
             + (gorduras * 9);
    }
}

class Alimento {
    String nome;
    double quantidadeGramas;
    Nutrientes nutrientes;

    public Alimento(String nome, double quantidadeGramas, Nutrientes nutrientes) {
        this.nome = nome;
        this.quantidadeGramas = quantidadeGramas;
        this.nutrientes = nutrientes;
    }

    public void exibirInformacoes() {

        double kcal = nutrientes.calcularKcal();

        System.out.println("=================================");
        System.out.println("Alimento: " + nome);
        System.out.println("Quantidade: " + quantidadeGramas + " g");

        System.out.println("\nMacronutrientes:");
        System.out.println("Carboidratos: " + nutrientes.carboidratos + " g");
        System.out.println("Proteínas: " + nutrientes.proteinas + " g");
        System.out.println("Gorduras: " + nutrientes.gorduras + " g");
        System.out.println("Fibras: " + nutrientes.fibras + " g");

        System.out.println("\nMicronutrientes:");
        System.out.println("Sódio: " + nutrientes.sodio + " mg");
        System.out.println("Cálcio: " + nutrientes.calcio + " mg");
        System.out.println("Ferro: " + nutrientes.ferro + " mg");

        System.out.println("\nTotal kcal: " + kcal + " kcal");
    }
}

public class CalculadoraNutricional {

    public static void main(String[] args) {

        List<Alimento> refeicao = new ArrayList<>();

        // Exemplo de alimentos registrados pelo usuário

        Nutrientes arroz = new Nutrientes(
                28, // carboidratos
                2.5, // proteínas
                0.3, // gorduras
                1.0, // fibras
                1,   // sódio
                10,  // cálcio
                0.2  // ferro
        );

        Nutrientes frango = new Nutrientes(
                0,
                31,
                3.6,
                0,
                74,
                15,
                1.0
        );

        refeicao.add(new Alimento("Arroz", 100, arroz));
        refeicao.add(new Alimento("Frango", 150, frango));

        // Totais da refeição
        double totalCarbo = 0;
        double totalProteina = 0;
        double totalGordura = 0;
        double totalFibra = 0;

        double totalSodio = 0;
        double totalCalcio = 0;
        double totalFerro = 0;

        double totalKcal = 0;

        for (Alimento alimento : refeicao) {

            alimento.exibirInformacoes();

            totalCarbo += alimento.nutrientes.carboidratos;
            totalProteina += alimento.nutrientes.proteinas;
            totalGordura += alimento.nutrientes.gorduras;
            totalFibra += alimento.nutrientes.fibras;

            totalSodio += alimento.nutrientes.sodio;
            totalCalcio += alimento.nutrientes.calcio;
            totalFerro += alimento.nutrientes.ferro;

            totalKcal += alimento.nutrientes.calcularKcal();
        }

        System.out.println("\n=================================");
        System.out.println("TOTAL DA REFEIÇÃO");
        System.out.println("=================================");

        System.out.println("Carboidratos: " + totalCarbo + " g");
        System.out.println("Proteínas: " + totalProteina + " g");
        System.out.println("Gorduras: " + totalGordura + " g");
        System.out.println("Fibras: " + totalFibra + " g");

        System.out.println("\nMicronutrientes:");
        System.out.println("Sódio: " + totalSodio + " mg");
        System.out.println("Cálcio: " + totalCalcio + " mg");
        System.out.println("Ferro: " + totalFerro + " mg");

        System.out.println("\nTOTAL KCAL: " + totalKcal + " kcal");
    }
}
