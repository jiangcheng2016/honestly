function decrypt(b) {
            b = b.replace('*S1*', ''); var c = [{ oe: '0', oK: '1', ow: '2', oi: '3', '7e': '4', '7K': '5', '7w': '6', '7i': '7', Ne: '8', NK: '9' },
            { 4: '5', 6: '1', n: '0', '-': '2', o: '3', v: '4', C: '6', S: '7', c: '8', E: '9' },
            { 5: '1', z: '0', A: '2', i: '3', P: '4', k: '5', s: '6', l: '7', F: '8', q: '9' }],
                e = { on: '0', ov: '1', oc: '2', oz: '3', '7n': '4', '7v': '5', '7c': '6', '7z': '7', Nn: '8', Nv: '9' },
                f = []; return b.split('').forEach(function (g, h) { if (1 == h % 4) { var k = f.pop(); f.push(k + g) } else f.push(g) }), f.map(function (g, h, k) { return 1 == k.length % 3 && h == k.length - 1 ? e[g] || '*' : c[h % 3][g] || '*' }).join('')
        } 
        function parse(b) { if ('string' != typeof b) return []; try { var e, c = JSON.parse(b); if (c instanceof Array) e = c; else { var f = c.data || c; e = f.confesses || f.list || [] } var g = []; return e.forEach(function (h) { h.fromEncodeUin && g.push({ from: decrypt(h.fromEncodeUin || ''), to: h.toNick || h.toUin + [], say: h.topicName }) }), g } catch (h) { return b.startsWith('*S1*') || b.startsWith('o') || b.startsWith('7') || b.startsWith('N') ? [{ from: decrypt(b), to: '', say: '' }] : [] } }