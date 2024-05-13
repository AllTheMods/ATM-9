import sys
import os
import glob

def extract_from_all_snbt(directory):
    keys = ["title", "description", "subtitle", "hover"]
    output_lines = []
    # 処理するファイル名のリスト
    specific_files = [
        "ad_astra.snbt",
        "ars_nouveau.snbt",
        "blood_magic.snbt",
        "blue_skies.snbt",
        "botania.snbt",
        "create.snbt",
        "eidolon_repraised.snbt",
        "evilcraft.snbt",
        "forbidden_and_arcanus.snbt",
        "industrial_foregoing.snbt",
        "mekanism.snbt",
        "occultism.snbt",
        "powah.snbt",
        "productive_bees.snbt",
        "thermal_expansion.snbt",
        "twilight_forest.snbt"
    ]
    # ディレクトリ内の特定のファイルのみを処理
    for file_name in specific_files:
        file_path = os.path.join(directory, file_name)
        if os.path.exists(file_path):
            with open(file_path, 'r', encoding='utf-8') as file:
                lines = file.readlines()
                inside_description = False
                for i, line in enumerate(lines):
                    if 'hover: [ ]' in line or '"{atm9.' in line or "{image" in line  or "description: [\"\"]" in line:
                        continue
                    if any(key + ": [" in line for key in keys):
                        inside_description = True
                        # 一行で 'description: [...]' が完結しているかどうかを確認
                        if line.strip().endswith(']'):
                            inside_description = False
                    if inside_description and (line.strip() == '""' or line.strip() == '[""]'):  # 空の文字列行をスキップ
                        continue
                    if inside_description or any(key in line for key in keys):
                        file_name = os.path.basename(file_path)
                        tab_count = len(line) - len(line.lstrip('\t'))
                        output_lines.append(f"{file_name},{i+1},\t{'\t'*tab_count}{line.strip()}\n")
                    # 'description'の終了を検出
                    if inside_description and ']' in line and not line.strip().endswith('",') and not ('\"{' in line):
                        inside_description = False

    with open('000.snbt', 'w', encoding='utf-8') as output_file:
        output_file.writelines(output_lines)

def restore_lines_to_files():
    with open('000.snbt', 'r', encoding='utf-8') as extracted_file:
        extracted_lines = extracted_file.readlines()

    current_file = None
    file_lines = []
    for line in extracted_lines:
        file_name, line_number, content = line.split(',', 2)
        file_name = file_name.strip()
        if current_file != file_name:
            if current_file is not None:
                # Save previous file, using '\n' for LF line endings
                with open(current_file, 'w', encoding='utf-8') as file:
                    file.writelines(file_lines)
            current_file = file_name
            file_lines = []
            if os.path.exists(current_file):
                # Read the file, automatically converting CRLF to LF
                with open(current_file, 'r', encoding='utf-8') as file:
                    file_lines = file.readlines()
        line_number = int(line_number.strip()) - 1
        tab_count = content.count('\t', 0, len(content) - len(content.lstrip('\t'))) - 1
        tab_count = max(tab_count, 0)
        if line_number < len(file_lines):
            file_lines[line_number] = '\t' * tab_count + content.lstrip('\t').rstrip() + '\n'
        else:
            file_lines.append('\t' * tab_count + content.lstrip('\t').rstrip() + '\n')
    
    # Save the last file with LF line endings
    if current_file is not None:
        with open(current_file, 'w', encoding='utf-8', newline='\n') as file:
            file.writelines(file_lines)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("使用法: py detect.py a|b")
        sys.exit(1)

    if sys.argv[1] == 'a':
        current_directory = '.'
        extract_from_all_snbt(current_directory)
    elif sys.argv[1] == 'b':
        restore_lines_to_files()
    else:
        print("無効なオプションです。'a'は抽出して保存、'b'は元に戻すために使用します。")
