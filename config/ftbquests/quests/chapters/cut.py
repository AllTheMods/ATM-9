import os

def split_file(filename):
    # 絶対パスの取得
    base_dir = os.path.dirname(os.path.abspath(__file__))
    full_path = os.path.join(base_dir, filename)
    base_name = full_path.rsplit('.', 1)[0]
    prefix = f"{base_name}_split_"
    block_count = 0
    current_line = 0
    inside_block = False
    buffer = []

    with open(full_path, 'r', encoding='utf-8') as file:
        for line in file:
            buffer.append(line)
            if 'description: [' in line:
                inside_block = True
            if inside_block and ']' in line:
                inside_block = False
            current_line += 1

            if current_line >= 70 and not inside_block:
                with open(f"{prefix}{block_count}.snbt", 'w', encoding='utf-8') as output_file:
                    output_file.writelines(buffer)
                block_count += 1
                current_line = 0
                buffer = []

    # 最後のファイルを保存
    if buffer:
        with open(f"{prefix}{block_count}.snbt", 'w', encoding='utf-8') as output_file:
            output_file.writelines(buffer)

# 使用例
split_file('000.snbt')