import os
import json

# Directories
input_directory = "public/data"
output_file = "src/compounds.json"

# Initialize the list to hold compound data
compounds = []

# Iterate through each file in the directory
for index, filename in enumerate(sorted(os.listdir(input_directory)), start=1):
    if filename.endswith(".md"):  # Process only .md files
        file_path = os.path.join(input_directory, filename)
        with open(file_path, "r", encoding="utf-8") as file:
            first_line = file.readline().strip()  # Read the first line

        # Create an entry for the JSON
        compounds.append({
            "id": index,
            "name": first_line,
            "filename": filename
        })

# Save the compounds list to a JSON file
with open(output_file, "w", encoding="utf-8") as json_file:
    json.dump(compounds, json_file, indent=4)

print(f"JSON file saved to {output_file}")
