package ru.education.sstutravel;
import java.util.Base64;


public class Util {

    public static String byteToString64(byte[] binaryString){
        System.out.println(Base64.getEncoder().encodeToString(binaryString));
        return Base64.getEncoder().encodeToString(binaryString);
    }

}
