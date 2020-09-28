#!/bin/bash
cd `dirname $0`
mkdir lib/cfg.d/
ln -s ../../cfg/cfg.d/z_plumx.pl lib/cfg.d/z_plumx.pl
ln -s lib/cfg.d/ 
ln -s lib/static/
ln -s lib/lang/
ln -s lib/plugins/
