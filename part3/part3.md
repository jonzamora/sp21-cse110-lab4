# Part 3. Debugging using the DevTools
---
1. The application's bug is that, rather than adding together `num1` and `num2` as numbers, the two values are being concatenated together because they are strings.
2. I fixed the bug by explicitly converting `num1` and `num2` to the Number data type inside of the `calculateSum()` function using the `Number()` cast type function. By converting `num1` and `num2` to Numbers, they will be correctly added together and produce the expected mathematical result. See [pt3-solution](pt3-solution.png)
3. The name of the new json file is `citylots.json`
4. The `part2.js` file initiated the download of the new file.
5. The file size is 11687896 bytes, or approximately 11.7 MB.
6. The download took `1.23` seconds.
7. The User-Agent for the browser that made the request was `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36`
8. In the response, it came from an `Apache` server.
9. The file was last modified on `Tue, 26 Jan 2021 22:14:13 GMT`
10. The Content-Type of the file is `application/json`
11. The method inside the initiating file that made the request was `fetchData()`