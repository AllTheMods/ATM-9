ServerEvents.tags('item', event => {
  // Unify croptopia and cauponia fig
  event.add('forge:crops', 'cauponia:fig')
  event.add('forge:crops/fig', 'cauponia:fig')
  event.add('forge:figs', 'cauponia:fig')
  event.add('forge:fruits', 'cauponia:fig')
  event.add('forge:fruits/fig', 'cauponia:fig')
});
