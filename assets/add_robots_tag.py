import os

# Change this to your actual website root directory
website_root = "GEEKBUDS.TECH"

# Define keywords that identify blog post files
blog_keywords = ["brother-printer", "xerox-printer", "epson-printer", "hp-printer", "canon-printer", "service", "conan", "zebra", "pixma", "printer" ]  # Add more if needed

for root, _, files in os.walk(website_root):
    for filename in files:
        if filename.endswith(".html") and any(keyword in filename.lower() for keyword in blog_keywords):
            file_path = os.path.join(root, filename)
            
            with open(file_path, "r", encoding="utf-8") as file:
                content = file.read()

            # Check if the file has a <head> tag and no robots meta tag
            if "<head>" in content and '<meta name="robots"' not in content:
                updated_content = content.replace(
                    "<head>", 
                    '<head>\n    <meta name="robots" content="index, follow">', 
                    1
                )

                with open(file_path, "w", encoding="utf-8") as file:
                    file.write(updated_content)

print("Meta tag added to all blog-related HTML files successfully!")
