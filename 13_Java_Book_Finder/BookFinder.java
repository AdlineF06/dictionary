import java.io.*;
import java.net.*;
import java.net.http.*;
import java.util.Scanner;

public class BookFinder {
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        System.out.println("--- BOOK FINDER (Google Books API) ---");
        System.out.print("Enter book title or keyword: ");
        String query = sc.nextLine().trim().replace(" ", "+");

        String urlStr = "https://www.googleapis.com/books/v1/volumes?q=" + query;
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(urlStr))
                .GET()
                .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println("\nRaw JSON response (parse with a JSON library like org.json or Gson for structured output):\n");
        System.out.println(response.body());
        sc.close();
    }
}
// Note: For cleaner parsed output, add the org.json library to your classpath, e.g.:
// implementation("org.json:json:20230618") if using Gradle,
// then parse response.body() with new JSONObject(...) to extract "items" -> "volumeInfo" -> "title", "authors".
