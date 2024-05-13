def sort_and_group_by_filename(file_path, output_file_path):
    # ファイルを読み込む
    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()

    # ファイル名に基づいてグループ化
    grouped_lines = {}
    for line in lines:
        parts = line.split(',')
        file_name = parts[0].strip()
        if file_name not in grouped_lines:
            grouped_lines[file_name] = []
        grouped_lines[file_name].append(line)

    # ファイル名をアルファベット順にソート
    sorted_file_names = sorted(grouped_lines.keys())

    # ソートされたファイル名に基づいて、各グループ内で行番号に基づいてソート
    sorted_lines = []
    for file_name in sorted_file_names:
        grouped_lines[file_name].sort(key=lambda x: int(x.split(',')[1]))
        sorted_lines.extend(grouped_lines[file_name])

    # ソートされた内容を新しいファイルに書き込む
    with open(output_file_path, 'w', encoding='utf-8') as file:
        file.writelines(sorted_lines)

# 使用例
sort_and_group_by_filename('000.snbt', '000.snbt')