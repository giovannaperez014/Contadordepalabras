                                   /*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package contar.caracteres,

import java.util.Scanner;

/**
 *
 * @author Giovanna Perez
 */
   public class ContarCaracteres {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    Scanner lector=new Scanner(System.in);
    String cadena = "";
    char [] Arraycadena ;
    char caracter;
    int contador =0;
    System.out.println("Escriba una oración");
    cadena = lector.nextLine();
    Arraycadena = cadena.toCharArray();
    for (int i = 0; i < Arraycadena.length; i++){
        caracter =Arraycadena[i];
        for (int j = 0; j < Arraycadena.length; j++){
            if (Arraycadena[j] == caracter) {
                contador++;
            }
        }
        System.out.println(Arraycadena[i]+" "+ contador);
         contador = 0;
    }
 }
    
}
