import os
import xmltodict
import json
import chardet

# Reads the content of an XML file and returns it as a string
def read_xml_file(xml_file_path):
    with open(xml_file_path, 'rb') as xml_file:
        # Detect the encoding of the XML file
        encoding = chardet.detect(xml_file.read())['encoding']
        # Reset the file position to the beginning
        xml_file.seek(0)
        # Read the file with the correct encoding
        xml_content = xml_file.read().decode(encoding)
        return xml_content
    
# Converts an XML string to a Python dict object
def parse_xml_string_to_dict(xml_string):
    return xmltodict.parse(xml_string, attr_prefix='')

# Converts a Python dict object to a JSON string
def convert_dict_to_json_string(data_dict):
    return json.dumps(data_dict, indent=4, ensure_ascii=False)

# Writes a JSON string to a file
def write_json_string_to_file(json_string, json_file_path):
    with open(json_file_path, 'w', encoding='utf-8') as json_file:
        json_file.write(json_string)

# Converts an XML file to a JSON file
def convert_xml_file_to_json_file(xml_file_path, json_folder_path):
    # Read the contents of the XML file
    xml_string = read_xml_file(xml_file_path)
    # Parse the XML string to a Python dict object
    data_dict = parse_xml_string_to_dict(xml_string)
    # Convert the Python dict object to a JSON string
    json_string = convert_dict_to_json_string(data_dict)
    # Generate the file path for the output JSON file
    json_file_path = os.path.join(json_folder_path, os.path.basename(xml_file_path).replace('.xml', '.json'))
    # Write the JSON string to the output file
    write_json_string_to_file(json_string, json_file_path)

# Converts all XML files in a directory to JSON files
def convert_all_xml_files_to_json(xml_folder_path, json_folder_path):
    # Create the output folder if it doesn't exist
    os.makedirs(json_folder_path, exist_ok=True)

    # Loop through all files in the input folder
    for filename in os.listdir(xml_folder_path):
        # Check if the file is an XML file
        if filename.endswith('.xml'):
            # Convert the XML file to a JSON file
            xml_file_path = os.path.join(xml_folder_path, filename)
            convert_xml_file_to_json_file(xml_file_path, json_folder_path)

# Define the input and output directories
xml_folder_path = 'controller/XML'
json_folder_path = 'controller/JSON'

# Convert all XML files to JSON
convert_all_xml_files_to_json(xml_folder_path, json_folder_path)
