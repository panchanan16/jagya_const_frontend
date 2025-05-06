export default function buildMaterialItemArray(itemArray) {
    const orgArray = itemArray.map((item) => [
        item.mr_project_r_id,
        item.mr_item_name,
        item.mr_item_quantity,
        item.mr_item_amount
    ])

    return orgArray;

}
