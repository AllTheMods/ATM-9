import os
import sys
import glob
import string

def split_file(filename):
    base_dir = os.path.dirname(os.path.abspath(__file__))
    full_path = os.path.join(base_dir, filename)
    base_name = full_path.rsplit('.', 1)[0]
    prefix = f"{base_name}_split_"
    block_count = 0
    current_line = 0
    inside_block = False
    buffer = []
    alphabet = string.ascii_lowercase  # アルファベットを取得

    with open(full_path, 'r', encoding='utf-8') as file:
        for line in file:
            buffer.append(line)
            if 'description: [' in line:
                inside_block = True
            if inside_block and ']' in line:
                inside_block = False
            current_line += 1

            if current_line >= 70 and not inside_block:
                suffix = alphabet[block_count % len(alphabet)]  # 数字の代わりにアルファベットを使用
                with open(f"{prefix}{suffix}.snbt", 'w', encoding='utf-8') as output_file:
                    output_file.writelines(buffer)
                block_count += 1
                current_line = 0
                buffer = []

    # 最後のファイルを保存
    if buffer:
        suffix = alphabet[block_count % len(alphabet)]
        with open(f"{prefix}{suffix}.snbt", 'w', encoding='utf-8') as output_file:
            output_file.writelines(buffer)

def concat_files(base_name):
    base_dir = os.path.dirname(os.path.abspath(__file__))
    pattern = os.path.join(base_dir, f"{base_name}_split_*.snbt")
    output_filename = os.path.join(base_dir, f"{base_name}.snbt")
    with open(output_filename, 'w', encoding='utf-8') as outfile:
        for filename in sorted(glob.glob(pattern), key=lambda x: x.split('_')[-1]):  # アルファベット順にソート
            with open(filename, 'r', encoding='utf-8') as readfile:
                outfile.write(readfile.read())
            os.remove(filename)
        print(f"分割されたファイルを {output_filename} に結合しました。")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("使用法: python cut.py <filename> <command>")
        sys.exit(1)

    command = sys.argv[2]
    filename = sys.argv[1]

    if command == 'a':
        split_file(filename)
    elif command == 'b':
        base_name = filename.rsplit('.', 1)[0]
        concat_files(base_name)
    else:
        print("無効なコマンドです。'a' は分割、'b' は結合のために使用します。")